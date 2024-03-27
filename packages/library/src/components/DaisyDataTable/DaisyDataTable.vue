<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import { Sizes } from '../../globals'
const props = withDefaults(
  defineProps<{
    id?: string
    size: Sizes
    selectable?: boolean
    striped: boolean
    columns: {
      key: string
      label: string
      sortable?: boolean
    }[]
  }>(),
  {
    id: 'id',
    size: 'md',
    selectable: true
  }
)

const data = defineModel<Record<string, any>[]>({
  required: true
})
const selected = defineModel<Record<string, any>[]>('select')

const isSelectable = computed(() => props.selectable && selected.value)

const sortedBy = ref<{
  key: string
  order: 'asc' | 'desc'
} | null>({
  key: '',
  order: 'asc'
})

function sort(column: string) {
  if (!sortedBy.value) return
  sortedBy.value.key = column
  data.value.sort((a, b) => {
    if (sortedBy.value) {
      if (sortedBy.value.order === 'asc') {
        return a[sortedBy.value.key] > b[sortedBy.value.key] ? 1 : -1
      } else {
        return a[sortedBy.value.key] < b[sortedBy.value.key] ? 1 : -1
      }
    }
    return 0
  })
  sortedBy.value.order = sortedBy.value.order === 'asc' ? 'desc' : 'asc'
}

const sizeClass = computed(() => {
  return {
    xs: 'table-xs',
    sm: 'table-sm',
    md: 'table-md',
    lg: 'table-lg'
  }[props.size]
})

const stripedClass = computed(() => (props.striped ? 'table-zebra' : ''))
const classes = computed(() => [sizeClass.value, stripedClass.value])
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table" :class="classes">
      <!-- head -->
      <thead>
        <tr>
          <th v-if="isSelectable"></th>
          <th v-for="column in columns" :key="column.key">
            <component
              :is="column.sortable ? 'button' : 'div'"
              @click="column.sortable ? sort(column.key) : (() => {})()"
              class="flex items-center"
            >
              {{ column.label }}
              <span v-if="sortedBy && sortedBy.key === column.key">
                <Icon icon="mdi:chevron-up" v-if="sortedBy.order === 'asc'" class="w-5 h-5" />
                <Icon icon="mdi:chevron-down" v-if="sortedBy.order === 'desc'" class="w-5 h-5" />
              </span>
              <span v-else class="inline-block w-5 h-5"></span>
            </component>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item[id]"
          :class="{
            'bg-base-100': selected && selected.map((s) => s[id]).includes(item[id])
          }"
        >
          <th v-if="isSelectable">
            <input :value="item" class="checkbox" type="checkbox" v-model="selected" />
          </th>
          <th v-for="column in columns" :key="column.key">
            <slot :name="`item-${column.key}`" :item="item">{{ item[column.key] }}</slot>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
