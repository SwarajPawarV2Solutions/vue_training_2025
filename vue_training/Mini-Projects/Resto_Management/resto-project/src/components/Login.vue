<template>
  <img class="logo" src="../assets/logo2.png" />
  <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" required />
    <input
      type="password"
      v-model="password"
      placeholder="Enter Password"
      required
    />
    <button @click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign-Up</router-link>
    </p>
  </div>
</template>

<script  lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import axios from "axios"; // Import axios for API requests

// Define type for user data
interface User {
  id: number;
  email: string;
  password: string;
}

// Reactive variables using Composition API
const router = useRouter(); // Initialize router
const email = ref<string>("");
const password = ref<string>("");

// Login method
const login = async () => {
  // Check if fields are empty
  if (!email.value || !password.value) {
    return;
  }

  // Getting API data using axios
  try {
    const result = await axios.get<User[]>(
      `http://localhost:3000/users?email=${email.value}&password=${password.value}`
    );

    if (result.status === 200 && result.data.length > 0) {
      // Storing user info in localStorage
      localStorage.setItem("user-info", JSON.stringify(result.data[0]));
      router.push({ name: "Home" });
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

// Check if the user is already logged in
onMounted(() => {
  const user = localStorage.getItem("user-info");
  if (user) {
    router.push({ name: "Home" });
  }
});
</script>
