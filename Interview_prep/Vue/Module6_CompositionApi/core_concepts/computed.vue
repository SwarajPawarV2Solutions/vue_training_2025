<!-- 
 3. computed()

The computed() function is used to create computed properties. Computed properties are cached based on their dependencies and will only recompute when one of their reactive dependencies changes. -->

<template>
    <div>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const count = ref(0)
  
  // Create a computed property based on count
  const doubleCount = computed(() => count.value * 2)
  
  const increment = () => {
    count.value++
  }
  </script>


<!-- In this example, doubleCount will automatically update when count changes, but it will not re-run unless count is modified. -->