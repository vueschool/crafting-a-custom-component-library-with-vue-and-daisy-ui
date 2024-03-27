<script setup lang="ts">
import { reactive } from 'vue'
import DaisyDataTable from './DaisyDataTable.vue'
import DaisyAvatar from '../DaisyAvatar/DaisyAvatar.vue'
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import { Sizes, sizes } from '../../globals'

const state = reactive({
  size: 'md' as Sizes
})

interface User {
  id: number
  image: string
  firstName: string
  lastName: string
  age: number
}

const data = ref<User[]>([])
const selected = ref<User[]>([])

function generateData() {
  data.value = []
  for (let i = 0; i < 50; i++) {
    data.value.push({
      id: i + 1,
      image: faker.image.avatar(),
      firstName: faker.person.firstName(),
      lastName: faker.person.firstName(),
      age: faker.number.int({ min: 10, max: 100 })
    })
  }
}

generateData()
</script>
<template>
  <Story>
    <Variant title="Variant Title">
      <DaisyDataTable
        v-model="data"
        v-bind="state"
        :columns="[
          { key: 'id', label: 'ID', sortable: true },
          { key: 'image', label: '' },
          { key: 'firstName', label: 'First Name', sortable: true },
          { key: 'lastName', label: 'Last Name', sortable: true },
          { key: 'age', label: 'Age', sortable: true }
        ]"
      >
        <template> </template>
        <template #item-image="{ item }">
          <DaisyAvatar
            :src="item.image"
            size="xs"
            :placeholder="`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`"
            class="bg-gray-500"
          />
        </template>
      </DaisyDataTable>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" title="Size" :options="sizes" />
    </template>
  </Story>
</template>
