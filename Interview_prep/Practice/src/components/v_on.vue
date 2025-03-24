<template>
    <div>
      <!-- v-on directive: event listener with a method call -->
      <button @click="handleClick">Click to toggle visibility</button>
      <p v-if="isVisible">You clicked the button!</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // v-on example: method for handling events
  const isVisible = ref(false);
  const handleClick = () => {
    isVisible.value = !isVisible.value;
  };
  </script>
  