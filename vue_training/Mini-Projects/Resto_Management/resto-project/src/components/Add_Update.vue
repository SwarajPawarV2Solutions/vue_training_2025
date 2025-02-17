<template>
  <Header />
  <h1>{{ pageTitle }}</h1>
  <form class="add_restaurant">
    <input
      type="text"
      placeholder="Enter Restaurant Name"
      v-model="restaurant.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Enter Restaurant Address"
      v-model="restaurant.address"
      name="address"
    />
    <input
      type="text"
      placeholder="Enter Restaurant Contact Number"
      v-model="restaurant.contact"
      name="contact"
    />
    <button type="button" @click="saveRestaurant">{{ buttonLabel }}</button>
  </form>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import Header from "./Header.vue";

const route = useRoute();
const router = useRouter();

const restaurant = reactive({
  name: "",
  address: "",
  contact: "",
});

const isUpdate = route.params.id;
const pageTitle = isUpdate ? "Update Restaurant" : "Add Restaurant";
const buttonLabel = isUpdate ? "Update Restaurant" : "Add New Restaurant";

const saveRestaurant = async () => {
  try {
    let result;
    if (isUpdate) {
      result = await axios.put(
        `http://localhost:3000/restaurant/${route.params.id}`,
        {
          name: restaurant.name,
          address: restaurant.address,
          contact: restaurant.contact,
        }
      );
    } else {
      result = await axios.post("http://localhost:3000/restaurant", {
        name: restaurant.name,
        address: restaurant.address,
        contact: restaurant.contact,
      });
    }

    if (result.status === 200 || result.status === 201) {
      router.push({ name: "Home" });
      toast.success(
        isUpdate
          ? "Restaurant Updated successfully!"
          : "Restaurant Added successfully!"
      );
    }
    console.log("result", result);
  } catch (error) {
    console.error("Error saving restaurant:", error);
  }
};

onMounted(async () => {
  if (isUpdate) {
    const result = await axios.get(
      `http://localhost:3000/restaurant/${route.params.id}`
    );
    restaurant.name = result.data.name;
    restaurant.address = result.data.address;
    restaurant.contact = result.data.contact;
  }

  let user = localStorage.getItem("user-info");
  if (!user) {
    router.push({ name: "SignUp" });
  }
});
</script>
