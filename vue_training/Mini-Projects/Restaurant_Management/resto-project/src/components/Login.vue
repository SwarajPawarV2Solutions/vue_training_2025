<template>
      <img class="logo" src="../assets/logo2.png" />
      <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" required />
    <input type="password" v-model="password" placeholder="Enter Password" required />
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign-Up</router-link>
    </p>
  </div>

</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data(){
        return{
            email:'',
            password:''
        }
    },
   methods:{
    async login()
    {
        // Check if fields are empty
    if (!this.email || !this.password) {
        this.$toast.error('Email and Password are required!');
        return; // Do not proceed with the API call if fields are empty
    }

        // getting api data  using axios
        let result = await axios.get(
            //http://localhost:3000/users?email=test1@test.com&password=123456
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
    );

    if (result.status == 200 && result.data.length > 0) {
      this.$toast.success('Logged In');
      
      // To check user is already logged in or not by storing it in local Storage

      localStorage.setItem('user-info', JSON.stringify(result.data[0]))
      this.$router.push({ name: "Home" });
      }
    }
   },

   mounted(){
   let user = localStorage.getItem('user-info');
   if(user){
      this.$router.push({ name: 'Home' });
   }
  }
};

</script>