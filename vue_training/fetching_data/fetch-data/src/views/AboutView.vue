<template>
  <div>
    <h1>Fetched Data</h1>
    <!-- Display the fetched data here -->
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const categories = ref([]);
const isLoading = ref(false);

// Define a reactive variable for the data
const data = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')

    console.log(response);
    
    // Store the fetched data in the reactive variable
    data.value = response.data;
    

    console.log(response.data);
  } catch (error) {
    console.error("There was an error fetching the data:", error);
  }
};

// Fetch data when the component is mounted
onMounted(fetchData);
</script>


