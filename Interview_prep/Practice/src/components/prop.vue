<template>
    <div>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>

  const props = defineProps({
    message: {
      type: String,
      required: true
    }
  });
  </script>
  
<!-- 
  Key Differences:

  Syntax: In Vue 3 with Composition API, you use defineProps inside the <script setup>. In Vue 2, you use the props option within the component object.

  Ease of Use: In Vue 3 with the Composition API, defineProps simplifies the syntax and avoids the need for an explicit data or computed property to access props.
  
  Reactivity: In Vue 3, props are reactive by default when using defineProps, whereas in Vue 2, props are reactive, but you have to access them through the component's context (i.e., this.$props). -->