<script setup lang="ts">
import DaisyAlert from 'daisy-vue/Alert'
</script>

## Success Alert

<DaisyAlert type="success">Hello Daisy Vue</DaisyAlert>

```vue
<DaisyAlert type="success">Hello Daisy Vue</DaisyAlert>
```

## Success Alert

:::playground

```vue
<script setup>
import { DaisyAlert } from 'daisy-vue'
</script>
<template>
  <DaisyAlert type="success"> Something awesome is happening </DaisyAlert>
</template>
```

:::

## Error Alert

:::playground

```vue
<script setup>
import { DaisyAlert } from 'daisy-vue'
</script>
<template>
  <DaisyAlert type="error"> Something awesome is happening </DaisyAlert>
</template>
```

:::

## Warning Alert

:::playground

```vue
<script setup>
import { DaisyAlert } from 'daisy-vue'
</script>
<template>
  <DaisyAlert type="warning"> Something awesome is happening </DaisyAlert>
</template>
```

:::

## Info Alert

:::playground

```vue
<script setup>
import { DaisyAlert } from 'daisy-vue'
</script>
<template>
  <DaisyAlert type="info"> Something awesome is happening </DaisyAlert>
</template>
```

:::