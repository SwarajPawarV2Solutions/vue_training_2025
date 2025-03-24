<template>
    <div>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  
  const increment = () => {
    count.value++;
    console.log(count.value);
  };
  
  defineExpose({
    increment, // Exposing increment method
  });
  </script>
  