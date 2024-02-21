# Installation

This installation procedure is the recommended way of using this component library. It involves:

- using alongside Tailwind and Daisy as a peer depenedency for maximum stylistic control
- importing components on an as needed basis for the sake of performance (tree-shakable)

> [!TIP]
> This is the recommended approach for Vite users!

## Step 1. Install the Core Library

::: code-group

```bash [npm]
npm install daisy-vue
```

```bash [pnpm]
pnpm add daisy-vue
```

```bash [yarn]
yarn add daisy-vue
```

:::

## Step 2. Configure Tailwind CSS

[Use the official Tailwind installation guide for Vite/Vue](https://tailwindcss.com/docs/guides/vite#vue). However, you do not have to do the actual install step, as it's already installed as a dependency of daisy-vue.

Make sure your tailwind config includes the following:

```ts [tailwind.config.ts]
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/daisy-vue/src/{components,directives}/**/*.{vue,ts}'
  ],
  plugins: [daisyui]
}
```

## Step 3. Import the Component of Your Choice and Start Using

:::code-group

```vue [App.vue]
<script setup lang="ts">
import { DaisyAlert } from 'daisy-vue'
</script>

<template>
  <DaisyAlert type="success"> Great! You've Successfully Installed DaisyVue </DaisyAlert>
</template>
```

:::
