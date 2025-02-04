<template>
      <img class="logo" src="../assets/resto_logo.png" />
      <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="name" placeholder="Enter Name" required />
    <input type="text" v-model="email" placeholder="Enter Email" required />
    <input type="password" v-model="password" placeholder="Enter Password" required />
    <button>Login</button>
    <p>
      <router-link to="/sign-up">Sign-Up</router-link>
    </p>
  </div>

</template>

<script>

export default{
    name: "Login"
}

</script>