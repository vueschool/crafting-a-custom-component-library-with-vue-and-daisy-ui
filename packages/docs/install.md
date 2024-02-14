# Installation

## Step 1. Install the Core Library

::: code-group

```npm bash
npm install daisy-vue
```

```pnpm bash
pnpm add daisy-vue
```

```yarn bash
yarn add daisy-vue
```

:::

## Step 2. Install Tailwind CSS

[Use the official Tailwind installation guide for Vite/Vue](https://tailwindcss.com/docs/guides/vite#vue)

## Step 3. Install Daisy UI

Install the package.

::: code-group

```npm bash
npm install daisyui@latest
```

```pnpm bash
pnpm add daisyui@latest
```

```yarn bash
yarn add daisyui@latest
```

:::

Then register it with Tailwind CSS.

:::code-group

```ts [tailwind.config.ts]
import daisyui from 'daisyui'

export default {
  //...
  plugins: [daisyui]
}
```

:::

## Step 4. Tell Tailwind about the Daisy UI Vue Components

:::code-group

```ts [tailwind.config.ts]
import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/daisy-vue/src/{components,directives}/**/*.{vue,ts}'
  ]
}
```

:::

## Step 5. Include the Library Styles

:::code-group

```ts [main.ts]
import 'daisy-vue/style.css'
```

:::

## Step 6. Import the Component of Your Choice and Start Using

:::code-group

```vue [App.vue]
<script setup lang="ts">
import { DaisyAlert } from 'daisy-vue'
</script>

<template>
  <DaisyAlert> Hello from Daisy Vue </DaisyAlert>
</template>
```

:::
