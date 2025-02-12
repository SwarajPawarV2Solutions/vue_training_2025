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

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import { useToast } from "vue-toastification"; // Import useToast if you're using a toast library

export default defineComponent({
  name: "Header",
  setup() {
    const router = useRouter(); // Get the router instance
    const toast = useToast(); // Get the toast instance

    // Logout method
    const logout = () => {
      localStorage.clear(); // Clear local storage
      router.push({ name: "Login" }); // Redirect to Login route
      toast.success("Logged Out successfully!"); // Show success toast
    };

    return {
      logout,
    };
  },
});
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
