<template>
 <h1>{{ title }}</h1>
</template>

<script setup>
const props = defineProps(
    ['title']
)

console.log(props.title);


</script>