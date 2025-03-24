<!--

KeepAlive

In Vue 3, KeepAlive is used to preserve the state of components when they are conditionally rendered. When you use KeepAlive, Vue will cache the component instance and retain its state, rather than re-rendering it every time it's displayed. This is particularly useful when switching between views or components and you want to preserve their internal state (like form data, scroll position, etc.) without reloading everything. 
-->

<!-- Basic Usage of KeepAlive

To use KeepAlive, wrap the components you want to cache within the KeepAlive tag. -->
<!-- 
Example:
Let’s say you have two components, Home and About. You want to cache these components when switching between them. -->

<!-- App.vue -->
<template>
    <div>
      <button @click="currentComponent = 'Home'">Home</button>
      <button @click="currentComponent = 'About'">About</button>
      
      <keep-alive>
        <!-- Dynamically render the component based on currentComponent -->
        <component :is="currentComponent" />
      </keep-alive>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const currentComponent = ref('Home')
  </script>


<component :is="currentComponent" />:

<!-- This is Vue's dynamic component feature. The <component> tag allows you to render a component dynamically based on the value of the :is directive.

The :is directive binds to a component name or component object.

In this case, currentComponent is a variable (likely defined in the setup function or data), and its value determines which component is rendered.

For example, if currentComponent = 'Home', then the <Home /> component will be rendered. If currentComponent = 'About', then the <About /> component will be rendered. -->

<!-- In the above example:

-> We use the keep-alive tag around the component tag.
-> currentComponent is a reactive variable that controls which component is displayed (Home or About).
-> When switching between components, Vue will cache the previously rendered component so that its state is retained. 
-->
  