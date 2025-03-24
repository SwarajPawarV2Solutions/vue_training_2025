// v-for Directive

/*
Definition:

v-for is used to render a list of elements by iterating over an array or object. It's similar to a loop in JavaScript.

Use Case:
Use v-for when you need to render a list of items dynamically, such as displaying a list of users, products, or any other array of data.


// Example


<template>
  <div>
    <!-- v-for directive: loop over an array of items -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// v-for example: array of items to iterate over
const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
]);
</script>


*/