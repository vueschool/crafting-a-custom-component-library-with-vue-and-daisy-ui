<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = withDefaults(
  defineProps<{
    type: 'info' | 'success' | 'warning' | 'error'
    dismissible?: boolean
  }>(),
  {
    dismissible: false,
    type: 'info'
  }
)

const emit = defineEmits<{
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
      <Icon :icon="icon" width="1.5rem" color="white" />
      <span class="text-white"><slot></slot></span>
      <button
        @click="handleDismiss"
        v-if="dismissible"
        type="button"
        class="text-lg text-white close"
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
