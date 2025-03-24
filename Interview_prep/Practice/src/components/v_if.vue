<template>
    <div>
      <!-- v-if directive: conditionally render content -->
      <p v-if="isVisible">This paragraph is conditionally rendered based on `isVisible`.</p>
      <button @click="toggleVisibility">Toggle Visibility</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // v-if example: boolean to control visibility
  const isVisible = ref(true);
  
  // Toggle visibility
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  </script>