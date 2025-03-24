  <!-- 

   LazyLoading

  In Vue 3, lazy loading components is a technique where a component is only loaded when it is required, rather than being loaded upfront. This can improve the initial load time and performance of your application, especially when you have large components or many components that aren't needed immediately.

Vue provides a built-in method called defineAsyncComponent that helps you define components that are lazily loaded. This function allows you to specify a component that will be loaded asynchronously, which means Vue will fetch and render it only when it's actually needed.
 -->


 <!-- How to Use defineAsyncComponent
To use defineAsyncComponent, you need to import it from Vue and use it to define a component that should be lazily loaded. -->

<!-- 1. Basic Example: Lazy Load a Component

Let’s assume you have a component MyComponent.vue that you want to lazy load. -->

<template>
    <div>
      <button @click="showComponent = !showComponent">
        Toggle Component
      </button>
      <!-- Lazy load the component when `showComponent` is true -->
      <component :is="lazyComponent" v-if="showComponent" />
    </div>
  </template>
  
  <script setup>
  import { ref, defineAsyncComponent } from 'vue'
  
  const showComponent = ref(false)
  
  // Define the async component with `defineAsyncComponent`
  const lazyComponent = defineAsyncComponent(() => import('./MyComponent.vue'))
  </script>


<!-- In this example:

defineAsyncComponent is used to define lazyComponent, which is loaded only when required.
The import() function dynamically imports MyComponent.vue when the component is rendered.
The v-if="showComponent" condition ensures that the component is rendered only when the showComponent variable is true. -->
  

<!-- 3. Example with Router: Lazy Loading Components in Routes
You can also use lazy loading for components in Vue Router, which is common for large applications. This helps to split the code by routes and load only the components required for the current route.

Here’s an example using lazy loading with Vue Router: -->

<!-- javascript code -->
<!-- 
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('../views/Home.vue')),
  },
  {
    path: '/about',
    name: 'About',
    component: defineAsyncComponent(() => import('../views/About.vue')),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router -->


<!-- In this example:

Each route’s component (Home.vue, About.vue) is lazily loaded using defineAsyncComponent with import().
This ensures that only the required route components are loaded when the user navigates to that route, reducing the initial load time. -->



<!-- 
Benefits of Lazy Loading Components

Reduced Initial Load Time: By splitting the code into smaller chunks, only the necessary parts of the application are loaded initially, which can significantly improve the time it takes to load the page.

Faster Subsequent Loads: If the user interacts with your app and needs to navigate to components that haven’t been loaded yet, they’ll be fetched asynchronously as needed, which improves overall performance.

Better User Experience: Loading components only when needed can prevent unnecessary resources from being fetched upfront, making your app feel faster and more responsive. -->
