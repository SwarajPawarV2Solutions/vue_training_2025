<!-- 
 4. watch()

The watch() function allows you to watch for changes in a reactive state or computed properties and perform side effects when the watched value changes. It gives you control over what happens when data changes. -->

<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const count = ref(0)
  
  const increment = () => {
    count.value++
  }
  
  // Watch the `count` and log when it changes
  watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`)
  })


//   In this example, the watch function tracks the count variable. Whenever count changes, the callback is triggered, logging the old and new values.
  
//   You can also use deep watching if you're tracking nested properties:

watch(user, (newValue, oldValue) => {
  console.log('User object changed:', newValue)
}, { deep: true })
  </script>




  