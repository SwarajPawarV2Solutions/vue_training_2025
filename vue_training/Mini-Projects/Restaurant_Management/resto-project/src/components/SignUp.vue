<template>
  <img class="logo" src="../assets/logo2.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <form @submit.prevent="signUp">
    <input type="text" v-model="name" placeholder="Enter Name" required />
    <input type="text" v-model="email" placeholder="Enter Email" required />
    <input type="password" v-model="password" placeholder="Enter Password" required />
    <button type="submit">Sign Up</button>
    </form>
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

      // Validate that fields are not empty
      if (!this.name || !this.email || !this.password) {
        this.$toast.error("All fields are required!");
        return;
      }
      
      console.log("signUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        this.$toast.success('SignUp successfully!');
      
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
