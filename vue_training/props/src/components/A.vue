<template>
    <div class="Modals">
        <h1>A</h1>
        <button>Show Modal A</button>
        <div v-if="showModal" class="modal">
            <h1>This is modal</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsam magni voluptatum sapiente debitis repellat quisquam blanditiis dicta? Quis neque dolores laudantium, unde tempora in dolor itaque quae ipsa quaerat.</p>
            <button>Hide Model A</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const showModal  =ref(false)

</script>