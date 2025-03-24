<!-- ParentComponent.vue -->
<template>
    <child @myEvent="handleMyEvent" />
  </template>
  
  <script setup>
   import child from './child.vue';
  const handleMyEvent = (message) => {
    console.log('Event received in parent:', message);
  };
  </script>
  