import SignUp from "./components/SignUp.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Add_Update from "./components/Add_Update.vue"; // Make sure Add_Update.vue is imported

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    // Route for adding a new restaurant
    name: "Add_Restaurant",
    component: Add_Update, // Use Add_Update.vue for both Add and Update
    path: "/add-update", // This will be used to add a new restaurant
  },

  // Route for updating an existing restaurant

  {
    name: "Update_Restaurant",
    component: Add_Update, // Using Add_Update for both Add and Update
    path: "/add-update/:id", // This will handle the update route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
