/*
 1. v-if Directive (Conditional Rendering)

Definition:

v-if is used to conditionally render a DOM element based on a boolean expression. If the condition evaluates to true, the element is rendered; if it evaluates to false, the element is not rendered at all.

Use Case:
Use v-if when you want to render or remove elements from the DOM based on some condition, such as showing a loading spinner or a message when certain data is being fetched.


Example


<template>
  <div>
    <!-- v-if directive: conditionally render content -->
    <p v-if="isVisible">This paragraph is conditionally rendered based on `isVisible`.</p>
    <button @click="toggleVisibility">Toggle Visibility</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// v-if example: boolean to control visibility
const isVisible = ref(true);

// Toggle visibility
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>
*/


