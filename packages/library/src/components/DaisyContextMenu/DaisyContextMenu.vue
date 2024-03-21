<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from 'radix-vue'

defineProps<{
  items: {
    label: string
    action: () => void
    children?: {
      label: string
      action: () => void
    }[]
  }[]
}>()
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>
      <slot></slot>
    </ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent class="w-56 rounded menu bg-base-200" :side-offset="5">
        <ul>
          <li v-for="item in items" :key="item.label">
            <component :is="item.children ? ContextMenuSub : ContextMenuItem">
              <button v-if="!item.children" @click="item.action">{{ item.label }}</button>

              <ContextMenuSubTrigger v-if="item.children" class="block w-full">
                <div>
                  <div class="flex items-center justify-between">
                    <span>{{ item.label }}</span>
                    <span><Icon icon="radix-icons:chevron-right" /></span>
                  </div>
                </div>
              </ContextMenuSubTrigger>

              <ContextMenuPortal v-if="item.children">
                <ContextMenuSubContent
                  class="w-56 pl-5 rounded menu bg-base-200"
                  :side-offset="0"
                  :align-offset="0"
                >
                  <li v-for="child in item.children" :key="child.label">
                    <ContextMenuItem>
                      <button @click="item.action">{{ child.label }}</button>
                    </ContextMenuItem>
                  </li>
                </ContextMenuSubContent>
              </ContextMenuPortal>
            </component>
          </li>
        </ul>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
