<!-- 
 1. reactive()

The reactive() function is used to create a reactive object or array. It is the Composition API equivalent of Vue 2's data. -->

<template>
    <div>
      <p>{{ user.name }}</p>
      <button @click="updateName">Update Name</button>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  // Create a reactive object
  const user = reactive({
    name: 'John Doe',
    age: 30
  })
  
  const updateName = () => {
    user.name = 'Jane Doe'  // This will trigger reactivity
  }
  </script>
  