 <!-- Single-File Component(SFC) using .vue file extension


    A Vue SFC (Single File Component) is a component in the Vue.js framework that is defined in a single .vue file. It typically contains three sections:

    Template (<template>): This section defines the HTML structure of the component, where you declare the layout and structure of the UI elements.

    Script (<script>): This section contains the JavaScript logic for the component, such as data, methods, computed properties, and lifecycle hooks. It defines the behavior and functionality of the component.

    Style (<style>): This section contains the CSS or styling for the component. It allows you to define how the component should be styled, and you can also scope the styles to apply only to that specific component.


    Each *.vue file consists of three types of top-level language blocks: <template>, <script>, and <style>, and optionally additional custom blocks:


    
 In Vue 3, Single File Components (SFCs) work in a very similar way to previous versions of Vue, but with some enhancements and improvements, such as the Composition API for more flexible and reusable code.

Here’s a quick overview of the structure of a Vue 3 SFC and the key differences compared to Vue 2:

Vue 3 SFC Structure
A Vue 3 SFC is still made up of the three main sections:

Template (<template>)
Script (<script>)
Style (<style>)

However, Vue 3 introduces a new Composition API that provides a more functional approach to building components. Instead of using the data, methods, computed, and watch options inside the component, you can use the Composition API to define component logic in a more flexible and modular way. -->



<template>
  <div class="my-component">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref("Hello, Vue 3!")

const changeTitle = () => {
  title.value = "Title Changed!"
}
</script>

<style scoped>
.my-component {
  text-align: center;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px;
}
</style>





<!-- 
  Why Use Vue 3 SFCs?

Modularity: You can define a component’s template, logic, and style in one place, making it easier to maintain.

Composition API: With Vue 3, the Composition API provides a more flexible way of managing component logic and improves the reusability of code.

Better TypeScript Support: Vue 3 offers improved TypeScript support, making it easier to write type-safe components.
Improved Performance: Vue 3 comes with performance improvements that make it faster and more efficient.
 -->



 <!-- Transition from Vue 2 to Vue 3:

 Vue 2 uses the Options API (data, methods, computed, etc.), while Vue 3 gives developers the choice of using either the Options API or the newer Composition API.

 The Composition API is more powerful and allows for better code organization, especially in larger projects. -->
