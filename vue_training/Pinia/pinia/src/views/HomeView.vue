<template>
 <div class="home">
  <h1>Home</h1>
  <Counter/>
  <!-- <div class="count">{{ storeCounter.count }}</div> -->
  <div class="buttons">
    <button @click="storeCounter.decreaseCount">-</button>
    <button @click="storeCounter.increaseCount">+</button>
  </div>
  <hr>
  <div>
    The Counter is: {{ storeCounter.oddOrEven }}
  </div>
  <hr>
  <h3>Edit Counter</h3>
  <input v-model="storeCounter.count" type="number"/>
 </div>
</template>

<script setup>

 import {useCounterStore} from'@/stores/counter'
import Counter from '@/components/counter.vue'
 const storeCounter  = useCounterStore()


</script>

<style scoped>
  .count{
    font-size: 60px;
    margin: 20px;
  }
  .buttons button {
    font-size: 40px;
    margin: 10px;
  }
</style>
