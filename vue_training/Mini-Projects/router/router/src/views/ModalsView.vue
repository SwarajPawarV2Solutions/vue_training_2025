<template>
    <div class="modals">
   <h1> Modals</h1>
   <div>
    <label>
      show dark modals?
      <input
      v-model="showDarkModals"
        type="checkbox"
      />
    </label>
   </div>
  
   <button @click="showModal = true">Show Modal</button>
   <component
    v-if="showModal"
    :is="showDarkModals ? ModalDark : Modal "
     @hideModal="showModal = false"
     title="My modal title (via props)">
    <!-- we can also show v-slot by simply writing #title -->
    <template v-slot:title>My new title</template>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur repudiandae, amet sunt ipsa placeat temporibus debitis. Quidem praesentium harum quos dicta non? Temporibus sapiente sint maiores sunt facere tenetur?</p>
   </component>

    </div>
</template>

<script setup>
import {ref} from 'vue'
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

  // Modals
  const showDarkModals = ref(false)
   const showModal = ref(false)
</script>

<script>

  export default {
    components: {
      Modal
    }
  }
</script>

