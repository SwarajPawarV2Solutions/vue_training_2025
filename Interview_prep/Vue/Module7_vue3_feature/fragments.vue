<!-- In Vue 3 with the <script setup> syntax, you typically have a single root element in your component, as Vue's rendering system expects a single root element per component. However, in some cases, you may want to use multiple root elements, which is where Fragments come into play.

Vue 3 supports Fragments, meaning you can have multiple root elements in a component, but this is a feature that works behind the scenes when using the Composition API with <script setup>. -->

<template>
    <header>
      <h1>Welcome to Vue 3!</h1> T
    </header>
    <main>
      <p>This is the main content of the component.</p>
    </main>
  </template>
  
  <script setup>
    // Your script logic here
  </script>
  