<template>
    <div class="posts">
      <h1>This is a Post page</h1>
      <p>Display the content of post with ID of {{ $route.params.id }} here!</p>
      <div>
        <button @click="showPostId">Show Post Id</button>
      </div>
      <div>
        <button @click="goHomeIn3Seconds">Go Home in 3 Seconds</button>
      </div>
      <div>
        <button @click="gotoFirstPost">Go to First Post</button>
      </div>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </div>
  </template>
  
  <script setup>

import {useRoute, useRouter} from 'vue-router'

const route = useRoute();
const router = useRouter();

  const showPostId = () => {
    alert(` The Id of this post is: ${route.params.id}`)
  }

  const goHomeIn3Seconds = () => {
    setTimeout(() => {
       router.push('/')
    }, 3000);
  }

  const gotoFirstPost = () => {
     router.push({
     name: 'postDetail',
     params: {
      id: 'id1'
     }
  })
  }
  </script>
  