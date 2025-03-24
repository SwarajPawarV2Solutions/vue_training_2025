import pareentComponent from "./parentComponent"

<!-- Child Component -->
<template>
    <div>{{ myProp }}</div>
  </template>
  
  <script setup>
  defineProps({
    myProp: {
      type: String,
      required: true,
      default: 'Default Value'
    }
  });
  </script>