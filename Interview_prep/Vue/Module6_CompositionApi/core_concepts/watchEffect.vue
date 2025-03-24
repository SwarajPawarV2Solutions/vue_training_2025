<!-- 5. watchEffect()
The watchEffect() function is similar to watch(), but it is more automatic. It reactively tracks all the reactive data inside its scope and will re-run the provided function whenever any of those reactive dependencies change. It doesn't require you to specify what to watch — Vue will automatically track the reactive values used inside the function. -->

<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue'
  
  const count = ref(0)
  
  const increment = () => {
    count.value++
  }
  
  // Automatically run the effect whenever `count` changes
  watchEffect(() => {
    console.log(`The count is: ${count.value}`)
  })
  </script>
<!-- 
In this example, whenever count changes, the watchEffect() callback will automatically run and log the current value of count. There's no need to explicitly define the dependencies like in watch(). watchEffect() automatically tracks everything used inside its function. -->


<!-- 
1. reactive(): Used for making objects and arrays reactive.
2. ref(): Used for making primitive values (strings, numbers, booleans) reactive.
3. computed(): Used for creating computed properties that depend on reactive data.
4. watch(): Used to watch specific reactive data and perform side effects when they change.
5. watchEffect(): Automatically tracks all reactive dependencies inside its function and performs side effects when any of them change. 
-->
