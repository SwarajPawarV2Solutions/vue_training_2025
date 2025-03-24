<template>
    <ChildComponent ref="child" />
    <button @click="callIncrement">Call Increment from Parent</button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from '@components/defineExpose/Child.vue';
  
  const child = ref(null);
  
  const callIncrement = () => {
    // Accessing the exposed method from the child component
    child.value.increment();
  };
  </script>
  