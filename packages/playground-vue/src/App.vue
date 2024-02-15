<script setup lang="ts">
// not necessary to import here if using the plugin to install comps globally
import { DaisyAlert, DaisyRating } from 'daisy-vue'
</script>

<template>
  <!-- Test Change -->
  <DaisyAlert dismissible> Hello from Daisy Vue </DaisyAlert>
  <DaisyRating :rating="2"/>
</template>
