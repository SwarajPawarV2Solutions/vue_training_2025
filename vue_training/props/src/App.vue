<template>
  <div class="app">
    <h1>Props in Vue.js</h1>
    <Child :users="users" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './components/Child.vue'

const users = ref([
  { name: 'Swaraj', age: 25, car: "Mercedes" },
  { name: 'Sourabh', age: 27, car: "Audi" },
  { name: 'Abhishek', age: 26, car: "Porche" },
  { name: 'Shubham', age: 28, car: "BMW" }
])
</script>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
