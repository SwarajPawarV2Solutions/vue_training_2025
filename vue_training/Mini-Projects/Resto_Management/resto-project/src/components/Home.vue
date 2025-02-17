<template>
  <Header />
  <h1>
    Hello <span class="user-name">{{ name }}</span
    >, Welcome to Home Page
  </h1>
  <div class="restaurant-cards-container">
    <div class="restaurant-card" v-for="item in restaurant" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p><strong>Address:</strong> {{ item.address }}</p>
      <p><strong>Contact:</strong> {{ item.contact }}</p>
      <div class="actions">
        <!-- Update link now points to /add-update/:id for editing -->
        <router-link :to="'/add-update/' + item.id"
          >Update Restaurant</router-link
        >
        <button @click="deleteRestaurant(item.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Header from "./Header.vue";

// Reactive state for the restaurant list and user name
const restaurant = reactive([]);
const name = ref("");
const router = useRouter();

// Method to load data
const loadData = async () => {
  let user = localStorage.getItem("user-info");
  if (!user) {
    router.push({ name: "SignUp" });
  }
  name.value = JSON.parse(user).name;

  const result = await axios.get("http://localhost:3000/restaurant");
  restaurant.splice(0, restaurant.length, ...result.data); // Reset and update the array
};

// Method to delete restaurant
const deleteRestaurant = async (id) => {
  let result = await axios.delete(`http://localhost:3000/restaurant/${id}`);
  if (result.status === 200) {
    loadData(); // Reload restaurant data after deletion
  }
};

// Load data when component is mounted
onMounted(() => {
  loadData();
});
</script>

<style scoped>
.restaurant-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.restaurant-card {
  width: 250px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 20px;
  margin-left: 40px;
}

.restaurant-card h3 {
  margin-top: 0;
  font-size: 18px;
  color: #333;
  text-decoration: underline;
}

.restaurant-card p {
  font-size: 14px;
  color: #555;
}

.user-name {
  color: #800080;
  font-weight: bolder;
  font-style: italic;
  text-decoration: underline;
}

.actions {
  margin-top: 10px;
}

.actions button,
.actions a {
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

.actions button:hover,
.actions a:hover {
  background-color: #0056b3;
}
</style>
