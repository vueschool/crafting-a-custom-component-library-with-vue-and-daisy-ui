<script setup lang="ts">
// not necessary to import here if using the plugin to install comps globally
import { DaisyAlert, DaisyRating } from 'daisy-vue'
</script>

<template>
  <DaisyAlert dismissible type="success"> Hello from Daisy Vue </DaisyAlert>
  <br />
  <DaisyRating :rating="2" />
</template>
