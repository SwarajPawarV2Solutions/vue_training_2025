<template>
  <img class="logo" src="../assets/logo2.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <form @submit.prevent="signUp">
      <input type="text" v-model="name" placeholder="Enter Name" required />
      <input type="text" v-model="email" placeholder="Enter Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script  lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; // Import useRouter

// Define interface for User data
interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}

// Reactive state variables using ref()
const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");

// Use router from Composition API
const router = useRouter(); // Initialize router

// SignUp method
const signUp = async () => {
  // Validate that fields are not empty
  if (!name.value || !email.value || !password.value) {
    return;
  }

  console.log("signUp", name.value, email.value, password.value);
  
  try {
    const result = await axios.post<User>("http://localhost:3000/users", {
      email: email.value,
      name: name.value,
      password: password.value,
    });

    console.log(result);
    // If user is created successfully, store info and navigate to Home page
  if (result.status === 201) {
    // Store user info in localStorage
    localStorage.setItem("user-info", JSON.stringify(result.data));
    // Navigate to home page using router
    router.push({ name: "Home" });
  }
}catch (error) {
    console.error("Error during sign up:", error);
  };
}
// Check if user is already logged in (from localStorage) on mount
onMounted(() => {
  const user = localStorage.getItem("user-info");
  if (user) {
    router.push({ name: "Home" });
  }
});
</script>
