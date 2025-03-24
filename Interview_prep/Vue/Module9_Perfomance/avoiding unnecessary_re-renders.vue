<!-- Avoiding unnecessary re-renders

Avoiding unnecessary re-renders is the practice of preventing components from being re-rendered when there is no actual change in the data that affects the visual output. This is typically achieved by using optimization techniques like memoization, computed properties, or controlling when and how components should update. -->


<!-- Techniques to Avoid Unnecessary Re-renders:

1. Memoization: Use computed properties or memoization (e.g., useMemo in React) to cache results that don't need to be recalculated on every render.

2. Using v-once in Vue: For static content that doesn’t need to be re-rendered, you can use the v-once directive in Vue to render the element only once.

3. Avoiding Inline Functions: Avoid defining functions inline inside templates or JSX. Instead, define them as methods or use useCallback (in React) or @click="handleClick" (in Vue).

4. key Attribute: When rendering lists, use the key attribute to ensure that Vue (or React) can efficiently update only the parts of the list that have changed.

5. Vue's computed and watch: In Vue, computed properties are re-evaluated only when their dependencies change, and watch helps react to changes in specific data values without triggering unnecessary component re-renders. -->


<template>
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const items = ref([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  
  const filteredItems = computed(() => {
    return items.value.filter(item => item.name.includes('1'));
  });
  </script>
  
<!-- 
  In this example, the filteredItems computed property only updates when items change, preventing unnecessary re-renders when the list is not modified. -->





