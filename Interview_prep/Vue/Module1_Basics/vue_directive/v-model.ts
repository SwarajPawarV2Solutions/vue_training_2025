// v-model Directive

/*
Definition:

v-model is used to create two-way data binding between a form input and a data property. It automatically updates the value of the data property when the user interacts with the form element.

Use Case:
Use v-model when you need to bind form inputs (like <input>, <textarea>, or <select>) to data properties, so that the value of the input is always in sync with the component’s state.

example


<template>
  <div>
    <!-- v-model directive: two-way data binding -->
    <input v-model="inputValue" placeholder="Type something..." />
    <p>You typed: {{ inputValue }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// v-model example: two-way data binding
const inputValue = ref('');
</script>


*/