/*
    Slots 

In Vue 3, slots are a powerful feature used to create flexible and reusable components by allowing parent components to pass content into child components. They act as placeholders in the child component's template, which can be filled with content from the parent component.

Parent Component


<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';

</script>

<template>
    <div>
        <ChildComponent>
            <h1>Hello from Parent component</h1>
        </ChildComponent>
    </div>
</template>
*/
