<template>
  <Header/>
  <h1>Hello User, Welcome on Update Restaurant Page</h1>
  <form class="add_restaurant">
    <input type="text" placeholder="Update Restaurant Name" v-model="restaurant.name" name="name" />
    <input type="text" placeholder="Update Restaurant Address" v-model="restaurant.address" name="address" />
    <input type="text" placeholder="Update Restaurant Contact Number" v-model="restaurant.contact" name="contact" />
    <button type="button" v-on:click="addRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import Header from './Header.vue';
export default {
  name: "Update_Restaurant",
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
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
  },
};
</script>
