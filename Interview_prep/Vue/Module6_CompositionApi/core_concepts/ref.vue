<!-- 
 2. ref()

The ref() function is used to create a reactive primitive value (like numbers, strings, booleans). It is often used for simple data types where you don't need an entire object or array. -->

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Create a reactive primitive value
const count = ref(0)

const increment = () => {
  count.value++  // `value` is used to access the ref's value
}
</script>

<!-- Note: ref() values are accessed and mutated using the .value property. -->