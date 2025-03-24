// defineProps and defineEmits in <script setup>

/*

In Vue 3 with TypeScript, when you're using the <script setup> syntax, you can define props and events using defineProps and defineEmits, respectively. These are special Composition API functions designed to simplify the syntax in <script setup> by allowing you to define props and emits more concisely.


1. defineProps

defineProps is used to define the props that your component will receive. When using TypeScript, you can define the type of the props in a type-safe way.


Example


<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// Define the types of props using TypeScript

const props = defineProps<{
  message: string;
  count: number;
}>();
</script>

In above example:

defineProps takes a generic type argument to define the types of the props.
message and count are passed as props, with message being a string and count being a number.



Example with an interface for props:

interface MyComponentProps {
  title: string;
  isActive: boolean;
  items: string[];
}

const props = defineProps<MyComponentProps>();


*/


/*

2. defineEmits


defineEmits is used to define events that the component can emit. This helps to provide type safety for the emitted events.

Example 


<template>
  <div>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

// Define the events the component can emit
const emit = defineEmits<{
  (event: 'update', message: string): void;
  (event: 'toggle', status: boolean): void;
}>();

const sendMessage = () => {
  emit('update', 'Hello from the child component');
};

const toggleStatus = () => {
  emit('toggle', true);
};
</script>




*/
