<template>
    <div>
      <!-- v-show directive: toggle visibility without re-rendering the element -->
      <p v-show="isVisible">This paragraph is always in the DOM but toggled on/off.</p>
      <button @click="toggleVisibility">Toggle Paragraph Visibility</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // v-show example: toggle visibility
  const isVisible = ref(true);
  
  // Toggle visibility
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  </script>
  