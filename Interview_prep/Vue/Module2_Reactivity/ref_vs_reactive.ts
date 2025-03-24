/*
  reactive

  reactive is a method provided by Vue 3 that creates a deeply reactive object. It converts an object’s properties into reactive data, meaning any changes to those properties will trigger updates in the UI.

  Example 


  import { reactive } from 'vue';

const state = reactive({
  count: 0,
  user: {
    name: 'John Doe',
    age: 30
  }
});

state.count++; // Updates the UI
state.user.name = 'Jane Doe'; // Updates the UI



reactive works best with objects including arrays and comes with deep reactivity which means that all nested properties of the object become reactive.

Use reactive when managing complex state that involves objects or arrays. It’s ideal for scenarios where you need to track multiple properties as part of a single state.
*/



/*

ref 

  ref is another method provided by Vue 3, but it creates a reactive reference to a single value. Unlike reactive, ref is designed to handle primitive data types such as strings, numbers, and booleans, as well as individual objects. The syntax of ref looks like following:

import { ref } from 'vue';

const count = ref(0);
const userName = ref('John Doe');

count.value++; // Updates the UI
userName.value = 'Jane Doe'; // Updates the UI



ref works for primitive values and single objects and comes with a reactive wrapper .value property that provides access to the actual value.

Use ref when managing a single reactive value or when you need reactivity for a non-object type, like a number or string.

*/


