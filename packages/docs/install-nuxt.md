# Installation (Nuxt Module)

DaisyVue comes with a Nuxt module that auto imports all components in a tree-shakable fashion.

## Step 1. Install the Necessary Dependencies

::: code-group

```bash [npm]
npm install nuxt-daisy-vue daisyui@latest
```

```bash [pnpm]
pnpm add nuxt-daisy-vue daisyui@latest
```

```bash [yarn]
yarn add nuxt-daisy-vue daisyui@latest
```

:::

## Step 2. Regiser the Module in nuxt.config.ts

:::code-group

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['nuxt-daisy-vue']
  //...
})
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
