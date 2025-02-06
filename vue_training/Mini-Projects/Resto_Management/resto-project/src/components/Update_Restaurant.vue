<template>
  <Header/>
  <h1>Hello User, Welcome on Update Restaurant Page</h1>
  <form class="add_restaurant">
    <input type="text" placeholder="Update Restaurant Name" v-model="restaurant.name" name="name" />
    <input type="text" placeholder="Update Restaurant Address" v-model="restaurant.address" name="address" />
    <input type="text" placeholder="Update Restaurant Contact Number" v-model="restaurant.contact" name="contact" />
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios'
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
  },methods:{
     async updateRestaurant(){
      console.log("Restaurant Updated",this.restaurant);     
      //http://localhost:3000/restaurant/1/
      // Request type = put

      console.log(this.restaurant)
       const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact,
       });
       if(result.status==200){
        this.$router.push({name:'Home'});
        this.$toast.success('Restaurant Updated successfully!');

       }
       console.log("result",result);
       
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
    const result = await axios.get("http://localhost:3000/restaurant/"+ this.$route.params.id) // to get single restaurant according to its ID
    // console.log(this.$route.params.id);
    // console.log(result.data);
    this.restaurant = result.data  // to pre-fill data into update form 
    
  },
};
</script>
