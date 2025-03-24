<!-- Using key in v-for for efficient updates -->

<!-- Definition of key in v-for:

Purpose: 
 The key attribute is used to uniquely identify each element in a list rendered with v-for. It tells Vue which item is which so that when the list changes, Vue can efficiently update only the modified elements in the DOM.

Behavior:
 When the data changes (such as adding, removing, or sorting items), Vue uses the key to match the new list with the existing DOM elements. This enables Vue to update only the elements that have changed, instead of re-rendering the entire list, making the update process more efficient.

Best Practice: 
 The key should be a unique and stable value for each item. Typically, an item's unique identifier (like an id) is used as the key. 
 
 
 Why Use key?

Efficient Rendering: Without a key, Vue will attempt to reuse DOM elements based on their order, which could lead to unnecessary re-renders or incorrect updates. By specifying a unique key, Vue can properly track changes and efficiently update the DOM.
Correct Rendering: A proper key helps Vue avoid errors when reordering elements in the list.
 
 -->

<template>
    <ul>
      <!-- Using v-for with a key for efficient updates -->
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Define the list of items
  const items = ref([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ])
  
  // You can update the items array dynamically as well
  setTimeout(() => {
    items.value.push({ id: 4, name: 'Item 4' })
  }, 2000)
  </script>
  