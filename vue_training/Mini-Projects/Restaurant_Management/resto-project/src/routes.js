import SignUp from "./components/SignUp.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import {createRouter, createWebHistory} from 'vue-router'
import Update_Restaurant from "./components/Update_Restaurant.vue";
import Add_Restaurant from "./components/Add_Restaurant.vue";

const routes = [
    {
        name:'Home',
        component: Home,
        path:'/'
    },
    {
        name:'SignUp',
        component: SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component: Login,
        path:'/login'
    },
    {
        name:'Update_Restaurant',
        component: Update_Restaurant,
        path:'/update-restaurant'
    },
    {
        name:'Add_Restaurant',
        component: Add_Restaurant,
        path:'/add-restaurant'
    },
  

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router

        