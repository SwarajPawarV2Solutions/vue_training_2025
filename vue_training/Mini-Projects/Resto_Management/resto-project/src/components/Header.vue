<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img src="../assets/logo2.png" alt="Logo" />
      <div class="app-name">QuickBite</div>
    </div>
    <div class="navbar-links">
      <router-link class="navbar-link" to="/">Home</router-link>
      <router-link class="navbar-link" to="/add-update"
        >Add Restaurant</router-link
      >
      <a @click="logout" class="navbar-link">Logout</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"; // Import useRouter
import { Router } from 'vue-router'; // Type assertion to make sure router is properly typed

// Composition API: Use `useRouter` hook to interact with Vue Router
const router = useRouter() as Router; // Use the router instance to navigate

// Logout function
const logout = (): void => {
  localStorage.clear(); // Clear the local storage
  router.push({ name: "Login" }); // Redirect to the Login page

};
</script>

<style scoped>
.navbar {
  background-color: #22333b;
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
  font-size: 50px;
  font-weight: bold;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  font-style: italic;
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
