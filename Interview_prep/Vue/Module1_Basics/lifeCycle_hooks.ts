// Life Cycle Hooks

// Lifecycle hooks in Vue 3 are methods that are triggered during specific points in a component’s existence, from its creation and mounting to its update and destruction. These hooks are used to run custom logic in response to different lifecycle events, giving developers control over when to perform certain operations such as initialization, data fetching, rendering, or cleaning up resources. Vue 3 provides both the Options API and Composition API for defining and managing lifecycle hooks.


/*

1. onMounted ->

This hook is called after the component is mounted to the DOM.

When it's called: After the component has been added to the DOM, but before any updates.
Use case: Fetching data, manipulating the DOM, or triggering side effects after the component has been mounted.


import { onMounted } from 'vue';

onMounted(() => {
  console.log('Component has been mounted');
});



2. onUpdated ->

This hook is called after the component updates due to a state change.

When it's called: After the component has been updated and the DOM has been re-rendered.
Use case: Perform actions after the component updates, such as animations or DOM manipulations.


import { onUpdated } from 'vue';

onUpdated(() => {
  console.log('Component has been updated');
});



3. onUnmounted

This hook is called after the component is unmounted and destroyed.

When it's called: After the component is removed from the DOM and its instance is destroyed.
Use case: Final cleanup actions after the component has been unmounted.

import { onUnmounted } from 'vue';

onUnmounted(() => {
  console.log('Component has been unmounted');
});


4. onBeforeMount

This hook is called before the component is mounted to the DOM.

When it's called: Before the component is rendered for the first time.
Use case: Performing setup before the component is mounted.

import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  console.log('Component will mount');
});


5. onBeforeUpdate

This hook is called before the component updates due to a reactive state change.

When it's called: Before the component re-renders due to a state change.
Use case: Perform actions before the component is updated, like saving data before it changes.

import { onBeforeUpdate } from 'vue';

onBeforeUpdate(() => {
  console.log('Component will update');
});

*/