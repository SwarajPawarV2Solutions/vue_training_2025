
// In Vue 3, ref and reactive are part of the Composition API, which allows you to create reactive state in a more flexible and modular way. Here's a breakdown of how they work in TypeScript and how to use them effectively.

/*
     1. ref

     ref is used to create a reactive reference to a primitive value or an object. It is often used when you want to hold a single value or a reference to an object that you want to be reactive.

     In TypeScript, you can type ref to make sure the type is correctly inferred or explicitly declared.
*/

/*
<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    // Using ref to declare a reactive counter
    const counter = ref<number>(0);

    // Function to increment the counter
    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      increment,
    };
  },
};
</script>
*/



/*
       Reactive

       reactive is used to create a reactive object, where all of its properties are reactive. This is helpful for working with complex data structures like arrays or objects.


       Example 



    <template>
  <div>
    <p>{{ person.name }}</p>
    <p>{{ person.age }}</p>
    <button @click="updatePerson">Update Person</button>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
    // Using reactive to create a reactive object
    const person = reactive({
      name: 'John',
      age: 30
    });

    // Function to update the person object
    const updatePerson = () => {
      person.name = 'Jane';
      person.age = 32;
    };

    return {
      person,
      updatePerson,
    };
  },
};
</script>



Key Differences Between ref and reactive:


ref is for single primitive values (like numbers, strings, booleans, etc.) or a reference to a DOM element.
reactive is used for objects or arrays to make all properties reactive.
Accessing values:

With ref, you access the value using .value (e.g., counter.value).
With reactive, you access properties directly without .value (e.g., person.name).

*/
