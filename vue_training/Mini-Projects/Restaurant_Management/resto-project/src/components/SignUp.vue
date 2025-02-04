<template>
  <img class="logo" src="../assets/resto_logo.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" required />
    <input type="text" v-model="email" placeholder="Enter Email" required />
    <input type="password" v-model="password" placeholder="Enter Password" required />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    // signUp method will post data into db.json file
    
    async signUp() {
      console.log("signUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("Sign Up Successful");
      
      // To check user is already logged in or not by storing it in local Storage

      localStorage.setItem('user-info', JSON.stringify(result.data))
      this.$router.push({ name: "Home" });
      }
    },
  },

  mounted(){
   let user = localStorage.getItem('user-info');
   if(user){
      this.$router.push({ name: 'Home' });
   }
  }
};
</script>

<style>

</style>
