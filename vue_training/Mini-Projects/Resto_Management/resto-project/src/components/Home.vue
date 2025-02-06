<template>
  <Header/>
  <h1>Hello <span class="user-name"> {{ name }} </span>, Welcome on Home Page</h1>
  <div class="restaurant-cards-container">
    <div 
      class="restaurant-card" 
      v-for="item in restaurant" 
      :key="item.id">
      
      <h3>{{ item.name }}</h3>
      <p><strong>Address:</strong> {{ item.address }}</p>
      <p><strong>Contact:</strong> {{ item.contact }}</p>
      
      <div class="actions">
        <router-link :to="'/update-restaurant/'+item.id">Update Restaurant</router-link>
        <button v-on:click="deleteRestaurant(item.id)">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Header from './Header.vue';
export default {
  name: "Home",
  data(){
    return {
      name:'',
      restaurant:[],
    }
  },
  components:{
     Header
  },
  methods:{
    async deleteRestaurant(id)
    {
  
      let result = await axios.delete("http://localhost:3000/restaurant/"+ id);
      if(result.status==200)
        {
             this.$toast.success('Restaurant deleted successfully!');
          this.loadData();
        }
    },

    async loadData()
     {
      let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name
    if(!user) {
      this.$router.push({ name: 'SignUp' });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.log(result);
    this.restaurant = result.data
    
     },
  },
  mounted() {
    this.loadData()
  }
};
</script>

<style>
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

  .user-name{
    color: #800080 ; 
    font-weight: bolder;
    font-style: italic;
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
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
  }

  .actions button:hover,
  .actions a:hover {
    background-color: #0056b3;
  }
</style>
