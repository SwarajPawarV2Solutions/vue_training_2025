<!-- ChildComponent.vue -->
<template>
    <button @click="sendMessage">Click to send message</button>
  </template>
  
  <script setup>
  const emit = defineEmits();  // Declare the event we will emit
  
  const sendMessage = () => {
    emit('myEvent', 'Hello from Child!');
  };
  </script>
  