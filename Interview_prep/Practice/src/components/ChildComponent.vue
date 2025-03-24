<template>
<div>
    <slot :message="message"></slot>
</div>
</template>

<script setup>
const message = " returning from ChildComponent"
</script>