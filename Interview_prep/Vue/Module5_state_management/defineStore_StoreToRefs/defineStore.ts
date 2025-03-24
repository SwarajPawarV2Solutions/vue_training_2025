// In Pinia, defineStore and storeToRefs are two important utilities that simplify state management in Vue 3 applications. Here's an explanation of both:

/*
defineStore in Pinia


defineStore is a function used to define a store in Pinia. It is the core way to create a state container (store) where you can define the state, getters, actions, and other logic for a particular part of your application.

syntax 


import { defineStore } from 'pinia'

export const useStore = defineStore('storeName', {
  state: () => ({
    // your state properties
  }),
  getters: {
    // computed properties based on state
  },
  actions: {
    // methods to mutate state or perform async operations
  }
})



-> state: Defines the state for the store. This is reactive data that can be accessed and mutated.
-> getters: Defines computed properties that can derive state values (like Vue computed properties).
-> actions: Defines methods that can modify the state (either synchronously or asynchronously).


example 


// store.js

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubledCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})


*/