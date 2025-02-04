<template>
  <div class="nav">
    <a href="#">Home</a>
    <router-link to="add-restaurant">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout </a>
  </div>
</template>

<script>
    
    export default {
        name: 'Header',
         methods: {
            logout(){
                localStorage.clear();
                this.$router.push({name:'Login'})
            }
         }
    }
</script>

<style>
  .nav{
    background-color: #333;
    overflow: hidden;
  }
  .nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 14px;
    margin-right: 4px;
  }
  .nav a:hover{
    background-color: #ddd;
    color: #222;
  }
</style>