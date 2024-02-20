# Installation (Nuxt Module)

DaisyVue comes with a Nuxt module that auto imports all components in a tree-shakable fashion.

## Step 1. Install the Necessary Dependencies

::: code-group

```bash [npm]
npm install nuxt-daisy-vue @nuxtjs/tailwindcss daisyui@latest
```

```bash [pnpm]
pnpm add nuxt-daisy-vue @nuxtjs/tailwindcss daisyui@latest
```

```bash [yarn]
yarn add nuxt-daisy-vue @nuxtjs/tailwindcss daisyui@latest
```

:::

## Step 2. Regiser the Modules in nuxt.config.ts

:::code-group

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-daisy-vue']
  //...
})
```

:::

## Step 3. Create the tailwind.config.ts

:::code-group

```ts [tailwind.config.ts]
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/daisy-vue/src/{components,directives}/**/*.vue',
    './node_modules/nuxt-daisy-vue/node_modules/daisy-vue/src/{components,directives}/**/*.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: [daisyui]
}
```

:::

## Step 4. Start Using the Components

:::code-group

```vue [App.vue]
<script setup lang="ts">
// no need to import anything
</script>

<template>
  <DaisyAlert type="success"> Great! You've Successfully Installed DaisyVue </DaisyAlert>
</template>
```

:::
