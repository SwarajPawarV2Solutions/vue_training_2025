/*
   storeToRefs in Pinia


storeToRefs is a utility function in Pinia that helps to convert a store’s state into reactive references. By default, when you access a store’s state in a component, you get a reactive object. If you want to destructure or use specific properties of the state more easily, you can use storeToRefs to turn the state properties into separate reactive references.

This is useful if you want to access specific properties from the store and avoid losing reactivity during destructuring.

Why is this needed?
In Vue, when you destructure an object, it loses its reactivity. To maintain reactivity while destructuring, Pinia provides storeToRefs.
*/



/*

syntax 

import { storeToRefs } from 'pinia'

const store = useStore()
const { stateProperty } = storeToRefs(store)

*/



/*
  Example

  Assume we have a store with the following state:

  // store.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    message: 'Hello, Pinia!'
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})


Now, let's use this store in a component:

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from './store'
import { storeToRefs } from 'pinia'

// Access the store
const counterStore = useCounterStore()

// Use storeToRefs to destructure state and maintain reactivity
const { count } = storeToRefs(counterStore)

// Access actions directly
const increment = counterStore.increment
</script>



In this example:

-> storeToRefs(counterStore) converts count (and other state properties) into reactive references.
-> Now, count is a ref, meaning it maintains reactivity, and you can use it directly in the template ({{ count }}) without losing reactivity.
-> You can also access increment directly without using storeToRefs because it’s an action.

*/

/*
  Example: Without storeToRefs (Incorrect Reactivity)

const { count } = store
// count is no longer reactive, changes to `store.count` won't reflect here




Example: With storeToRefs (Correct Reactivity)

const { count } = storeToRefs(store)
// count stays reactive, and updates to `store.count` will reflect here

*/

/*
   Summary

   
defineStore: Used to define a store in Pinia. It lets you define state, getters, and actions in a structured way, allowing for easy state management in Vue 3.

storeToRefs: A utility that ensures reactivity when destructuring properties from the store. It converts the store’s state properties into reactive references, which ensures that the reactivity of the state is preserved, even when you destructure it.

These two utilities work together to help you manage and use state more effectively in Vue 3 with Pinia!
*/