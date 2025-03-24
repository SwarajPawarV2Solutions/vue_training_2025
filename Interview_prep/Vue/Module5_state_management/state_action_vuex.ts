// Vuex is a state management library for Vue.js applications. It helps manage the state of your application in a centralized store, ensuring that the state is predictable and that you can efficiently share data across different components.

// Here’s a breakdown of how to use Vuex in a Vue 2 application (though it works similarly in Vue 3):

// 1) State: The state is the central data store for your application. It contains all the reactive data that you want to manage globally.

 // State: Holds the reactive data for the application
//  state: {
//     count: 0
//   },



// 2) Mutations: Mutations are used to modify the state in Vuex. They are synchronous and are the only way to modify the state.

// mutations: {
//     increment(state) {
//       state.count++;
//     },
//     decrement(state) {
//       state.count--;
//     },
//     setCount(state, payload) {
//       state.count = payload;
//     }
//   },

// 3) Actions: Actions are used for asynchronous operations and can commit mutations to modify the state.

// actions: {
//     incrementAsync({ commit }) {
//       setTimeout(() => {
//         commit('increment');
//       }, 1000);
//     },
//     decrementAsync({ commit }) {
//       setTimeout(() => {
//         commit('decrement');
//       }, 1000);
//     },
//     setCountAsync({ commit }, payload) {
//       setTimeout(() => {
//         commit('setCount', payload);
//       }, 1000);
//     }
//   },

// Getters: Getters are like computed properties for the store, used to retrieve and transform the state.


 // Getters: Used to retrieve and transform the state
//  getters: {
//     doubleCount(state) {
//       return state.count * 2;
//     },
//     isCountPositive(state) {
//       return state.count > 0;
//     }
//   }