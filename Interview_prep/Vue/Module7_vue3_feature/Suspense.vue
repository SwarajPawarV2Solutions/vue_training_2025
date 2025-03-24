<!-- In Vue 3, the <Suspense> component is used to handle asynchronous components or operations. It allows you to control the rendering flow of your application by "suspending" the rendering of a component until its asynchronous resources are ready (such as when using lazy-loaded components or awaiting data fetching). While the asynchronous operation is in progress, a fallback content can be displayed (like a loading indicator). -->

<template>
    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </template>
  
  <script setup>
  import { defineAsyncComponent } from 'vue';
  
  const AsyncComponent = defineAsyncComponent(() =>
    import('./AsyncComponent.vue')
  );
  </script>
  