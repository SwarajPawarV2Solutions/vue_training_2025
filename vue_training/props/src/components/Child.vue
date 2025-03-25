<template>
    <div>
      <ul>
        <li v-for="user in users" :key="user.name">
          {{ user.name }} - {{ user.age }} - {{ user.car }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  // Use defineProps to define the props that are passed from the parent component
  const props = defineProps({
    users: {
      type: Array,
      required: true
    }
  })
  </script>
  
  <style scoped>
  /* Child component styles */
  </style>
  