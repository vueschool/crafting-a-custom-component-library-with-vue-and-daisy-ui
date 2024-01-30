<script setup lang="ts">
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger
} from 'radix-vue'
defineProps<{
  triggerLabel: string
}>()
</script>

<template>
  <div class="tooltip">
    <PopoverRoot>
      <PopoverTrigger
        ><slot name="trigger">{{ triggerLabel }}</slot></PopoverTrigger
      >
      <PopoverPortal v-slot="slotProps">
        <PopoverContent class="p-3 bg-white shadow">
          {{ slotProps }}
          <slot></slot>
          <PopoverClose />
          <PopoverArrow />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </div>
</template>
