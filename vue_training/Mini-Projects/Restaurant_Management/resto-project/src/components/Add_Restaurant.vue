<template>
  <Header/>
  <h1>Hello User, Welcome on Add Restaurant Page</h1>
  <form class="add_restaurant">
    <input type="text" placeholder="Enter Restaurant Name" v-model="restaurant.name" name="name" />
    <input type="text" placeholder="Enter Restaurant Address" v-model="restaurant.address" name="address" />
    <input type="text" placeholder="Enter Restaurant Contact Number" v-model="restaurant.contact" name="contact" />
    <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
  </form>
</template>

<script>
import Header from './Header.vue';
export default {
  name: "Add_Restaurant",
  components:{
     Header
  },
  data(){
    return {
      restaurant:{
        name:'',
        address:'',
        contact:''
      }
    }
  },
  methods:{
    addRestaurant(){
       console.log(this.restaurant)
    }
  } ,
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
  },
};
</script>
