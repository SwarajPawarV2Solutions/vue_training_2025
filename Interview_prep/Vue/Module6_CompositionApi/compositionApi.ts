/*
1. What is the Composition API?

The Composition API is a new set of APIs in Vue 3 designed to make it easier to organize, reuse, and manage component logic. It provides a more flexible and powerful way to compose component logic and manage reactivity by allowing you to group related logic together.

Instead of separating the logic into different options (like data, methods, computed), the Composition API allows you to group related code together based on features or concerns. This can lead to more maintainable and reusable code, especially for complex components.
*/


/*
  2. What is the Options API?

The Options API is the traditional way of defining Vue components. In this approach, you define various options for the component using an object. These options include:

-> data: The reactive state of the component.
-> methods: Functions that handle user interactions or logic.
-> computed: Computed properties based on the state.
-> watch: Watches for changes in the state.
-> props: Props passed from parent components.
-> emits: Events emitted by the component.

The Options API follows a structure that is familiar and declarative, but can become harder to manage when components grow in size and complexity.

*/