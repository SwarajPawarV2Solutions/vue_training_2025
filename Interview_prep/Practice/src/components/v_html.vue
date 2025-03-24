<template>
    <div>
      <!-- v-html directive: bind raw HTML to an element -->
      <div v-html="htmlContent"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // v-html example: bind raw HTML content
  const htmlContent = ref('<strong>Raw HTML</strong> content injected.');
  </script>
  