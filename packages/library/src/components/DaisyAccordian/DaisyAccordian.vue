<script setup lang="ts">
import { provide } from 'vue'
import { nanoid } from 'nanoid'

provide('accordianId', nanoid())
</script>

<template>
  <div class="w-full join join-vertical">
    <slot></slot>
  </div>
</template>
