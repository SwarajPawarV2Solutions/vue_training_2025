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
import axios from 'axios'
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
   async  addRestaurant(){
       console.log(this.restaurant)
       const result = await axios.post("http://localhost:3000/restaurant",{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact,
       });
       if(result.status==201){
        this.$router.push({name:'Home'});
        this.$toast.success('Restaurant Added successfully!');

       }
       console.log("result",result);
       
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
