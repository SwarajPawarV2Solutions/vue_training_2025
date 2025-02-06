<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img src="../assets/logo2.png"/> <!-- Replace with logo if needed -->
      <div class="app-name">QuickBite</div>
    </div>
    <div class="navbar-title">
      
    </div>
    <div class="navbar-links">
      <router-link class="navbar-link" to="/">Home</router-link>
      <router-link class="navbar-link" to="add-restaurant">Add Restaurant</router-link>
      <a @click="logout" class="navbar-link">Logout</a>
    </div>
  </div>
</template>

<script>
    
    export default {
        name: 'Header',
         methods: {
            logout(){
                localStorage.clear();
                this.$router.push({name:'Login'})
                this.$toast.success('Logged Out successfully!');
            }
         }
    }
</script>

<style>
  .navbar {
    background-color: #333;
    padding: 8px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .navbar-logo {
    display: flex;
    align-items: center;
  }

  .navbar-logo img {
    height: 80px;
    width: 80px;
  }

  .app-name {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
   display: inline-flex;
   align-items: center;
   
  }

  .navbar-links {
    display: flex;
    gap: 20px;
  }

  .navbar-link {
    color: #f2f2f2;
    font-size: 20px;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }

  .navbar-link:hover {
    background-color: #fff;
    color: #333;
  }

  .navbar-link:active {
    background-color: #ccc;
    color: #222;
  }
</style>

