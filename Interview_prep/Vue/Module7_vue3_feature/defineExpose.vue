<!-- 

  defineExpose

 In Vue 3, the defineExpose function is used to expose methods or properties from a component to its parent when using the <script setup> syntax. It's a way to provide public access to certain internal methods or properties of a component, which can then be called or used by the parent component, without directly exposing the entire component instance. 

    syntax

    defineExpose({
  methodName,
  anotherMethod
});

 -->

 <!-- Example:
  
Imagine you have a child component that contains an internal method, and you want to expose that method so the parent component can call it. -->

<!-- Child Component (ChildComponent.vue): -->

<template>
  <div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
  console.log(count.value);
};

defineExpose({
  increment, // Exposing increment method
});
</script>
In the example above, we expose the increment method using defineExpose. This makes it accessible from the parent component.

<!-- Parent Component (ParentComponent.vue): -->

<template>
  <ChildComponent ref="child" />
  <button @click="callIncrement">Call Increment from Parent</button>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const child = ref(null);

const callIncrement = () => {
  // Accessing the exposed method from the child component
  child.value.increment();
};
</script>
In the parent component, we use a ref to reference the ChildComponent and then call the increment method that was exposed using defineExpose.