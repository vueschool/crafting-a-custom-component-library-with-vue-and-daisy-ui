<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { Repl, ReplStore } from '@vue/repl'
import { useData } from 'vitepress'
import { defineClientComponent } from 'vitepress'
import '@vue/repl/style.css'

const store = ref()
const slots = defineSlots()

// const Monaco = defineClientComponent(() => {
//   return import('@vue/repl/monaco-editor')
// })

const CodeMirror = defineClientComponent(() => {
  return import('@vue/repl/codemirror-editor')
})
const { isDark } = useData()

const config = ref({
  editorConfig: {
    theme: isDark.value ? 'dark' : 'light',
    showTsConfig: false,
    showImportMap: false,
    showCompileOutput: false,
    clearConsole: false,

    layout: 'horizontal',
    previewOptions: {
      customCode: {
        importCode: `
          import 'styles'
        `,
        useCode: `
      const playgroundStyles = document.createElement('link');
      playgroundStyles.href = '/playground.css';
      playgroundStyles.rel = 'stylesheet';
      document.querySelector('head').appendChild(playgroundStyles)`
      }
    }
  },
  imports: {
    '@daisy-vue/core':
      'http://localhost:5173/@fs/Users/danielkelly/daisy-ui-component-course/packages/library/dist/lib.js',
    vue: 'http://localhost:5173/.vitepress/cache/deps/vue.js?v=d0355ec2',
    styles: 'http://localhost:5173/.vitepress/theme/style.css'
  }
})

watch(isDark, (newVal) => {
  config.value.editorConfig.theme = newVal ? 'dark' : 'light'
})
const editorConfig = computed(() => {
  return config.value.editorConfig ? config.value.editorConfig : {}
})

onMounted(() => {
  const children = slots.default()
  const code = children?.[0]?.children.replace(/%0A[ ?]$/, '')
  const file = {
    'src/App.vue': decodeURIComponent(code)
  }
  store.value = new ReplStore({
    serializedState: btoa(JSON.stringify(file))
  })

  config.value?.imports &&
    store.value.setImportMap({
      imports: config.value.imports
    })
})

const displayingCode = ref(false)

function handleClickCode() {
  displayingCode.value = true
  config.value.editorConfig.layout = 'vertical'
}

function handleClickPreview() {
  displayingCode.value = false
  config.value.editorConfig.layout = 'vertical'
}

function handleClickSideBySide() {
  config.value.editorConfig.layout =
    config.value.editorConfig.layout === 'horizontal' ? 'vertical' : 'horizontal'
}
</script>

<template>
  <div class="playground-wrapper">
    <div class="tabs">
      <button
        @click="handleClickCode"
        :class="{
          active: displayingCode && config.editorConfig.layout === 'vertical'
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
        Code
      </button>

      <button
        @click="handleClickPreview"
        :class="{
          active: !displayingCode && config.editorConfig.layout === 'vertical'
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        Preview
      </button>
      <button
        @click="handleClickSideBySide"
        :class="{
          active: config.editorConfig.layout === 'horizontal'
        }"
      >
        Side by side
      </button>
    </div>
    <div
      class="playground"
      :class="{
        'displaying-code': config.editorConfig.layout === 'vertical' && displayingCode,
        'displaying-preview': config.editorConfig.layout === 'vertical' && !displayingCode,
        'one-at-a-time': config.editorConfig.layout !== 'horizontal',
        split: config.editorConfig.layout === 'horizontal'
      }"
    >
      <Repl v-if="store" autoResize :store="store" :editor="CodeMirror" v-bind="editorConfig" />
    </div>
  </div>
</template>

<style scoped>
.playground-wrapper {
  position: relative;
}
.playground :deep(.editor-container) {
  padding-top: 10px;
}
.playground :deep(.left) {
  float: inherit;
  margin-left: initial;
  left: initial;
  right: initial;
  background-color: initial;
  height: 100%;
}

.playground :deep(.right) {
  height: auto !important;
}

.playground :deep(.file-selector),
.playground :deep(.tab-buttons) {
  display: none;
}

:deep(.vue-repl) {
  width: 100%;
  background: transparent;
}

.playground :deep(.right) {
  float: inherit;
  margin-left: initial;
  left: initial;
  right: initial;
  background-color: initial;
  height: 100%;
}

.playground :deep(.wrapper) {
  display: none;
}

.displaying-code :deep(.right) {
  opacity: 0;
  pointer-events: none;
  z-index: -1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (min-width: 720px) {
  .one-at-a-time :deep(.right) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto !important;
  }
  .displaying-preview :deep(.left) {
    opacity: 0;
    pointer-events: none;
    z-index: -1;
  }
}
@media (max-width: 721px) {
  :deep(.left) {
    position: static;
  }
  :deep(.split-pane) {
    display: block !important;
  }
  :deep(.right) {
    position: static;
    margin-top: 10px;
    opacity: 1 !important;
  }
  .tabs {
    display: none !important;
  }
}

.displaying-code :deep(.left),
.displaying-preview :deep(.right),
.split {
  animation: fadeIn 0.3s;
}

.split .right {
  padding-left: 5px;
  padding-right: 5px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
svg {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 5px;
}
button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border: none;
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: background 0.3s;
}
:global(.dark .playground-wrapper .tabs button) {
  background: #333;
  color: #f5f5f5;
}

button.active {
  background: var(--vp-button-brand-bg) !important;
  color: #f5f5f5;
}

:deep(.output-container) {
  height: 100% !important;
}

:deep(.toggler) {
  display: none !important;
}
</style>
