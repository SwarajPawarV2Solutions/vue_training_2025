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

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; // Import useRouter

export default {
  name: "SignUp",
  setup() {
    // Reactive state variables using ref()
    const name = ref("");
    const email = ref("");
    const password = ref("");

    // Use router from Composition API
    const router = useRouter(); // Initialize router


    // SignUp method
    const signUp = async () => {
      // Validate that fields are not empty
      if (!name.value || !email.value || !password.value) {
        return;
      }

      console.log("signUp", name.value, email.value, password.value);
      let result = await axios.post("http://localhost:3000/users", {
        email: email.value,
        name: name.value,
        password: password.value,
      });
      console.warn(result);

      if (result.status === 201) {
        //toast.success("SignUp successfully!");

        // Store user info in localStorage
        localStorage.setItem("user-info", JSON.stringify(result.data));
        // Navigate to home page using router
        router.push({ name: "Home" });
      }
    };

    // Check if user is already logged in (from localStorage) on mount
    onMounted(() => {
      let user = localStorage.getItem("user-info");
      if (user) {
        router.push({ name: "Home" });
      }
    });

    // Return reactive data and methods to the template
    return {
      name,
      email,
      password,
      signUp,
    };
  },
};
</script>
