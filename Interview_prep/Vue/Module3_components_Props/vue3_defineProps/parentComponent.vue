<!-- Parent Component -->
<template>
    <div>Parent Component</div>
    <ChildComponent :myProp="parentData" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const parentData = ref('Hello from Parent');
  </script>