<template>
    <div class="modals">
   <h1> Modals</h1>
   <button @click="showModal = true">Show Modal</button>
   <Modal
    v-if="showModal"
     @hideModal="showModal = false"
     title="My modal title (via props)">
    <!-- we can also show v-slot by simply writing #title -->
    <template v-slot:title>My new title</template>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur repudiandae, amet sunt ipsa placeat temporibus debitis. Quidem praesentium harum quos dicta non? Temporibus sapiente sint maiores sunt facere tenetur?</p>
   </Modal>

    </div>
</template>

<script setup>
import {ref} from 'vue'
import Modal from '@/components/Modal.vue';

   const showModal = ref(false)
</script>

<script>

  export default {
    components: {
      Modal
    }
  }
</script>

