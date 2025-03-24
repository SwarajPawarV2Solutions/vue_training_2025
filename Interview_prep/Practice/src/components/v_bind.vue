<template>
    <div>
      <!-- v-bind directive: dynamically bind disabled attribute -->
      <button 
        :disabled="isDisabled" 
        @click="toggleButtonState"
      >
        Click Me
      </button>
      <p>Button is {{ isDisabled ? 'Disabled' : 'Enabled' }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // v-bind example: bind disabled attribute dynamically
  const isDisabled = ref(false);
  
  // Method to toggle the disabled state of the button
  const toggleButtonState = () => {
    isDisabled.value = !isDisabled.value;
  };
  </script>
  