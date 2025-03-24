
<template>
    <div>
      <!-- v-for directive: loop over an array of items -->
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // v-for example: array of items to iterate over
  const items = ref([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
  ]);
  </script>