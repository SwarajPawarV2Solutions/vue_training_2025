    <!-- Memoization with computed() -->


<!-- In Vue 3, memoization refers to the process of caching the result of an expensive operation or computation and returning the cached result when the same inputs are encountered again. This can significantly optimize performance by avoiding recalculating values unnecessarily.

Vue’s computed() function is inherently a form of memoization. It caches the computed value and only recomputes it when one of its reactive dependencies changes. This makes computed() an excellent tool for memoizing calculations in Vue.

How computed() Works as Memoization
When you create a computed property in Vue 3, Vue internally caches the result and only re-evaluates it when one of the reactive dependencies used inside the computed property changes. This is how memoization works: the first time the computed property is accessed, Vue runs the calculation and stores the result; subsequent accesses return the cached result unless dependencies have changed.



Basic Example of Memoization with computed()
Let’s consider a scenario where we have an expensive calculation (like filtering a list or processing data) that we only want to perform once unless the input data changes. -->

<template>
    <div>
      <p>Filtered Data: {{ filteredData }}</p>
      <button @click="changeData">Change Data</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Sample data
  const data = ref([1, 2, 3, 4, 5])
  
  // Computed property for filtering data
  const filteredData = computed(() => {
    console.log("Filtering data...") // This will show in the console each time the computed property is recalculated
    return data.value.filter(num => num % 2 === 0) // Filter even numbers
  })
  
  // Function to change the data (triggering recomputation)
  const changeData = () => {
    data.value = [1, 2, 3, 4, 5, 6, 7] // Modify the data to trigger the computed recalculation
  }
  </script>


<!-- Explanation:

-> filteredData is a computed property that filters the data array to get only even numbers.
-> When you first access filteredData, Vue will compute the filtered result and cache it.
-> If you access filteredData again without changing data, Vue will return the cached result without recalculating the filter.
-> The console.log("Filtering data...") will only appear the first time the computed property is accessed or when data is modified (because this triggers the recomputation). -->



<!-- Why This is Memoization:

The computed function caches the result and only recalculates when its dependencies (in this case, data.value) change.
This means the result is memoized until any of the reactive dependencies change, and Vue doesn’t recompute the value unless necessary. -->


<!-- Limitations of computed() Memoization

-> Dependencies are reactive: Computed properties will only cache based on reactive dependencies. If the dependencies are not reactive, Vue will not know when to recompute the value.
-> No manual control over caching: While Vue automatically handles caching for computed properties, there are no built-in methods to manually invalidate the cache or control how long a cache lasts (unless you introduce custom mechanisms). -->
