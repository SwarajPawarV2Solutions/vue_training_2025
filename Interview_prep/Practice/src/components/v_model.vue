
<template>
    <div>
      <!-- v-model directive: two-way data binding -->
      <input v-model="inputValue" placeholder="Type something..." />
      <p>You typed: {{ inputValue }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // v-model example: two-way data binding
  const inputValue = ref('');
  </script>