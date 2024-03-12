<script setup lang="ts">
import {DaisyButton, DaisyTabs, DaisyTab} from 'daisy-vue'
import { colorsBrand, colorsState, sizes } from "daisy-vue/globals"
const btnColorsNoState = [...colorsBrand, 'glass', 'link'];

</script>

# Button Component

## Button with Brand Colors

<DaisyTabs>
    <DaisyTab name="Preview">
    <DaisyButton v-for="color in btnColorsNoState" :key="color" :color="color" class="m-1">{{color}}</DaisyButton>
    </DaisyTab>
<DaisyTab name="Code">

<template v-for="color in btnColorsNoState" :key="color">

```vue-vue
<DaisyButton color="{{color}}">{{color}}</DaisyButton>

```

</template>
</DaisyTab>
</DaisyTabs>

## Active Button

<DaisyTabs>
    <DaisyTab name="Preview">
    <DaisyButton v-for="color in btnColorsNoState" :key="color" :color="color" active class="m-1">{{color}}</DaisyButton>
    </DaisyTab>
<DaisyTab name="Code">

<template v-for="color in btnColorsNoState" :key="color">

```vue-vue
<DaisyButton color="{{color}}" active>{{color}}</DaisyButton>

```

</template>
</DaisyTab>
</DaisyTabs>

## Button with State Colors

<DaisyTabs>
    <DaisyTab name="Preview">
    <DaisyButton v-for="color in colorsState" :key="color" :color="color" class="m-1">{{color}}</DaisyButton>
    </DaisyTab>
<DaisyTab name="Code">

<template v-for="color in colorsState" :key="color">

```vue-vue
<DaisyButton color="{{color}}" active>{{color}}</DaisyButton>

```

</template>
</DaisyTab>
</DaisyTabs>

## Outline Buttons

<DaisyTabs>
    <DaisyTab name="Preview">
    <DaisyButton v-for="color in btnColorsNoState" :key="color" :color="color" outline class="m-1">{{color}}</DaisyButton>
    </DaisyTab>
<DaisyTab name="Code">

<template v-for="color in btnColorsNoState" :key="color">

```vue-vue
<DaisyButton color="{{color}}" outline>{{color}}</DaisyButton>

```

</template>
</DaisyTab>
</DaisyTabs>

## Outline Buttons with State Colors

<DaisyTabs>
    <DaisyTab name="Preview">
    <DaisyButton v-for="color in colorsState" :key="color" :color="color" outline class="m-1">{{color}}</DaisyButton>
    </DaisyTab>
<DaisyTab name="Code">

<template v-for="color in colorsState" :key="color">

```vue-vue
<DaisyButton color="{{color}}" outline>{{color}}</DaisyButton>

```

</template>
</DaisyTab>
</DaisyTabs>

## Button Sizes

<DaisyTabs>
    <DaisyTab name="Preview">
    <DaisyButton v-for="size in [...sizes].reverse()" :key="size" :size="size" class="m-1">{{size}}</DaisyButton>
    </DaisyTab>
<DaisyTab name="Code">

<template v-for="size in [...sizes].reverse()" :key="size">

```vue-vue
<DaisyButton size="{{size}}" outline>{{size}}</DaisyButton>

```

</template>
</DaisyTab>
</DaisyTabs>

## Wide Button Sizes

<DaisyTabs>
<DaisyTab name="Preview">
    <DaisyButton wide>Wide</DaisyButton>
</DaisyTab>
<DaisyTab name="Code">

```vue-vue
<DaisyButton wide>Wide</DaisyButton>
```

</DaisyTab>
</DaisyTabs>

## Loading

<DaisyTabs>
<DaisyTab name="Preview">
    <DaisyButton loading>Loading</DaisyButton>
</DaisyTab>
<DaisyTab name="Code">

```vue-vue
<DaisyButton loading>Loading</DaisyButton>
```

</DaisyTab>
</DaisyTabs>
