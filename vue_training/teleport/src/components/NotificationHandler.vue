<template>
    <div class="root">
      <button @click="isOpen = true">Open</button>
     <Teleport to="body">
     <div class="modal" v-if="isOpen">
        <div>
            <h2>Notification</h2>
            <p>Some filler text</p>
            <button @click="isOpen = false">Close</button>
        </div>
     </div>
     </Teleport>
    </div>
</template>

<script setup>

import {ref } from 'vue'
const isOpen = ref(false)
  
</script>

<style scoped>
 .root {
    position: relative;
 }

 .modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 }


 .modal > div {
    background-color: white;
    padding: 50px;
    border-radius: 10px;
 }
</style>

