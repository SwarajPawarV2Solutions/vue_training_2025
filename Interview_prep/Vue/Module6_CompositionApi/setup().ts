// The setup() function is a core concept introduced in the Composition API in Vue 3. It is called before the component is created, and it serves as the entry point for all logic in a component that is written using the Composition API.

// In a Vue component, setup() is where you define reactive state, methods, computed properties, and watchers. It replaces a lot of what you would traditionally do inside the data, methods, computed, and watch options in the Options API.

/*
   Key Features of setup()

1. Execution Timing:

-> setup() is called before the component is created and before the data option is set up, which means it’s executed during the -> component's creation phase.
You cannot access component-specific properties like this.$refs, this.$el, or this.$store inside setup().

2. Reactive State:

-> You can use reactive and ref to create reactive state inside setup().
-> ref() is used for primitive values like numbers or strings.
-> reactive() is used for objects or arrays.

3. Return Object:

-> setup() returns an object, and everything inside this object will be available to the template as reactive properties. This makes everything returned from setup() automatically available in the component’s template.

4. Composition API Logic:

-> All logic related to your component, such as state, methods, and computed properties, are defined within the setup() function, making your component more modular, reusable, and organized.

*/



/*

How setup() Works

Here's a step-by-step breakdown of how the setup() function works and how to use it:

1. Defining Reactive State:

-> ref() is used for basic types like strings, numbers, and booleans.
-> reactive() is used for objects and arrays.

2. Methods and Functions:

-> You define methods (or any functions) inside setup(). They are used to modify the reactive state.

3. Returning Values:

-> Anything returned from setup() is exposed to the template, making it reactive. These values can be accessed directly in the template.

4. No this Context:

-> Inside setup(), this is not available (unlike in the Options API). You interact with state and methods directly through the returned object.

*/

// Example with Props and Emits in setup()

/*
<template>
  <div>
    <p>Message: {{ message }}</p>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Define props and emits
const props = defineProps({
  message: String
})

const emit = defineEmits()

const sendMessage = () => {
  emit('send', 'Hello from child component!')
}
</script>

*/
