<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
        <li v-for="post in posts" :key="post.id">
          <RouterLink :to="`/postDetail/${ post.id}`">{{ post.title }}</RouterLink>
        </li>
        
      </ul>
    <textarea v-autofocus></textarea>

    <div>
      <button
      @click="increaseCounter(1)"
      class="counter-button"
      :class="{'yellow' : oddOrEven === 'odd'}">
       {{ counterData.count }}
      </button>
    </div>
  </div>
</template>

<script setup>

import {ref} from 'vue'
import { useCounter } from '@/use/useCounter';

// posts

const posts = ref([
   {
    id: 'id1',
    title: 'post1'
   },
   {
    id: 'id2',
    title: 'post2'
   },
   {
    id: 'id3',
    title: 'post3'
   }
])

// Counter button

const {counterData , increaseCounter,oddOrEven} = useCounter()

</script>

<style scoped>

ul{
  margin-bottom: 30px;
}
.counter-button{
  font-size: 60px;
  width: 100%;
  background-color: pink;
}
.counter-button.yellow{
  background-color: rgb(214, 214, 54);
}
</style>

