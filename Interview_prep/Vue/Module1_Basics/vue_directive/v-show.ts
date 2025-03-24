/*

v-show Directive (Toggle Visibility Without Re-rendering)


Definition:

v-show is similar to v-if, but instead of adding/removing elements from the DOM, it only toggles the element's CSS display property. This means the element will always be in the DOM but can be hidden or shown based on the condition.

Use Case:
Use v-show when you want to toggle the visibility of an element without removing it from the DOM. It's more performant than v-if when toggling visibility frequently.


Example 


<template>
  <div>
    <!-- v-show directive: toggle visibility without re-rendering the element -->
    <p v-show="isVisible">This paragraph is always in the DOM but toggled on/off.</p>
    <button @click="toggleVisibility">Toggle Paragraph Visibility</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// v-show example: toggle visibility
const isVisible = ref(true);

// Toggle visibility
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

*/