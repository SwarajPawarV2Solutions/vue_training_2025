<!-- Event delegation

Event delegation is the practice of attaching a single event listener to a parent element to manage events for child elements, by taking advantage of the event propagation (bubbling) mechanism in the DOM. This reduces memory usage, simplifies code, and enables handling events for dynamically added child elements. -->


<!-- Why is it useful?

Performance Optimization: Instead of attaching multiple event listeners to many child elements, you attach just one listener to the parent element. This is especially useful when dealing with lists or large DOM structures.
Handling Dynamic Content: Event delegation allows you to manage events on elements that are added or removed from the DOM dynamically, without the need to re-attach event listeners each time. -->


<template>
    <div @click="handleClick">
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  
  const handleClick = (event) => {
    if (event.target && event.target.tagName === 'LI') {
      console.log('Item clicked:', event.target.textContent);
    }
  };
  </script>

<!-- Here, the @click listener is attached to the parent <div>, and the event is handled for the <li> items. -->
  