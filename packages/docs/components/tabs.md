<script setup lang="ts">
import {DaisyTabs, DaisyTab} from 'daisy-vue'

const types = ['Bordered', 'Boxed', 'Lifted'] as const

</script>

# Tabs

### Lifted

<DaisyTabs type="lifted">
    <DaisyTab name="Preview">
        <DaisyTabs type="lifted">
        <DaisyTab name="Tab 1">Tab 1 Content</DaisyTab>
        <DaisyTab name="Tab 2">Tab 2 Content</DaisyTab>
        <DaisyTab name="Tab 3">Tab 3 Content</DaisyTab>
    </DaisyTabs>
    </DaisyTab>
<DaisyTab name="Code">

```html
<DaisyTabs type="lifted">
  <DaisyTab name="Tab 1">Tab 1 Content</DaisyTab>
  <DaisyTab name="Tab 2">Tab 2 Content</DaisyTab>
  <DaisyTab name="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
```

</DaisyTab>

</DaisyTabs>

### Bordered

<DaisyTabs type="lifted">
    <DaisyTab name="Preview">
        <DaisyTabs type="bordered">
        <DaisyTab name="Tab 1">Tab 1 Content</DaisyTab>
        <DaisyTab name="Tab 2">Tab 2 Content</DaisyTab>
        <DaisyTab name="Tab 3">Tab 3 Content</DaisyTab>
    </DaisyTabs>
    </DaisyTab>
<DaisyTab name="Code">

```html
<DaisyTabs type="bordered">
  <DaisyTab name="Tab 1">Tab 1 Content</DaisyTab>
  <DaisyTab name="Tab 2">Tab 2 Content</DaisyTab>
  <DaisyTab name="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
```

</DaisyTab>

</DaisyTabs>

### Boxed

<DaisyTabs type="lifted">
    <DaisyTab name="Preview">
        <DaisyTabs type="boxed">
        <DaisyTab name="Tab 1">Tab 1 Content</DaisyTab>
        <DaisyTab name="Tab 2">Tab 2 Content</DaisyTab>
        <DaisyTab name="Tab 3">Tab 3 Content</DaisyTab>
    </DaisyTabs>
    </DaisyTab>
<DaisyTab name="Code">

```html
<DaisyTabs type="boxed">
  <DaisyTab name="Tab 1">Tab 1 Content</DaisyTab>
  <DaisyTab name="Tab 2">Tab 2 Content</DaisyTab>
  <DaisyTab name="Tab 3">Tab 3 Content</DaisyTab>
</DaisyTabs>
```

</DaisyTab>

</DaisyTabs>
