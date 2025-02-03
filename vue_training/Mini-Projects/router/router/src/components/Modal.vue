<template>
   <teleport to="body">
   <div class="modal">
    <h1>My Modal Title</h1>
    <slot />

    <!-- <button @click="$emit('hideModal')">Hide modal</button> -->
    <button @click="handleButtonClick">Hide modal</button>
    <div>
      Username is: {{ userData.username }}
    </div>
   </div>
   </teleport>

</template>

<style scoped>
  .modal{
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>


<script setup>

import { defineProps, defineEmits, inject } from 'vue';
// Props
  
   const props = defineProps ({
      title: {
          type: String,
          default: 'No title Specified'
      }
    })

// emits 

const emit = defineEmits(['hideModal'])

// handle button click
const handleButtonClick = () => {
   emit('hideModal')
    
}

// User Data

const userData = inject('userData')

   
</script>


