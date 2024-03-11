<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import type { States } from '../../globals/states'

const props = withDefaults(
  defineProps<{
    /** Affects the color and icon.
     * @default undefined
     */
    type?: States

    /** When true, displays an "x" button to dismiss the alert. When clicked the alert is hidden and the dismiss event is emitted
     * @default false
     */
    dismissible?: boolean
  }>(),
  {
    dismissible: false
  }
)

const emit = defineEmits<{
  /** Emitted when the alert is dismissed and completely transitioned out */
  dismiss: [payload: void]
}>()

const classes = computed(() => {
  const map = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error'
  }

  return `alert ${map[props.type]}`
})

const dismissed = ref(false)

const transitionDuration = 500
const transitionCssRule = `all ${transitionDuration}ms`

function handleDismiss() {
  dismissed.value = true
  setTimeout(() => {
    emit('dismiss')
  }, transitionDuration)
}

const icon = computed(() => {
  if (!props.type) return 'carbon:information'
  return {
    info: 'carbon:information',
    success: 'carbon:checkmark-outline',
    warning: 'carbon:warning',
    error: 'carbon:error'
  }[props.type]
})
</script>
<template>
  <Transition>
    <div v-if="!dismissed" role="alert" class="alert" :class="classes">
      <Icon :icon="icon" width="1.5rem" />
      <span><slot></slot></span>
      <button
        @click="handleDismiss"
        v-if="dismissible"
        type="button"
        class="text-lg close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </Transition>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: v-bind(transitionCssRule);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
