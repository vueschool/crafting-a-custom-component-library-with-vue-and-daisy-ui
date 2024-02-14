# Installation

This installation procedure is the recommended way of using this component library. It involves:

- using alongside Tailwind and Daisy as a peer depenedency for maximum stylistic control
- importing components on an as needed basis for the sake of performance (tree-shakable)

> [!TIP]
> This is the recommended approach for Vite users!

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

This is necessary so that the JIT compiler can see the Tailwind and Daisy UI classes and include them in the generated CSS.

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

## Step 5. Import the Component of Your Choice and Start Using

:::code-group

```vue [App.vue]
<script setup lang="ts">
import DaisyAlert from 'daisy-vue/alert'
</script>

<template>
  <DaisyAlert type="success"> Great! You've Successfully Installed DaisyVue </DaisyAlert>
</template>
```

:::
