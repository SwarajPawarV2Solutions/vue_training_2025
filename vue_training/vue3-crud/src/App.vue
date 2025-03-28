<template>
  <div class="crud-container">
    <h1>Product Categories</h1>

    <!-- Category Cards -->
    <div class="category-cards">
      <CategoryCard
        v-for="(category, index) in categories"
        :key="index"
        :categoryName="category"
        :categoryImage="getCategoryImage(category)"
        @categoryClicked="onCategoryClicked"
      />
    </div>

    <!-- Product List for Selected Category -->
    <div v-if="selectedCategory" class="product-list">
      <h2>{{ selectedCategory }} Products</h2>
      <div class="product-cards">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-card"
        >
          <img :src="product.image" alt="Product Image" class="product-image" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CategoryCard from './components/CategoryCard.vue'; // Import CategoryCard component

// Define the state variables
const categories = ref<string[]>([]);
const selectedCategory = ref<string | null>(null);
const products = ref<any[]>([]);

// API URL to fetch categories and products
const apiUrl = 'https://fakestoreapi.com/products/categories';
const apiProductUrl = 'https://fakestoreapi.com/products';

// Fetch the list of categories from the API
const fetchCategories = async (): Promise<void> => {
  try {
    const response = await axios.get(apiUrl);
    categories.value = response.data; // Update categories with data from the API
    console.log(categories.value);
    
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Fetch products based on selected category
const fetchProducts = async (category: string): Promise<void> => {
  try {
    const response = await axios.get(`${apiProductUrl}?category=${category}`);
    products.value = response.data; // Update the products for the selected category
    console.log(products.value);
    
  } catch (error) {
    console.error('Error fetching products for category:', error);
  }
};

// Get the image for the category (you can use a static image or URL)
const getCategoryImage = (category: string): string => {
  const imageMap: { [key: string]: string } = {
    'electronics': 'https://via.placeholder.com/150?text=Electronics',
    'jewelery': 'https://via.placeholder.com/150?text=Jewelry',
    'men\'s clothing': 'https://via.placeholder.com/150?text=Men%27s+Clothing',
    'women\'s clothing': 'https://via.placeholder.com/150?text=Women%27s+Clothing'
  };
  return imageMap[category] || 'https://via.placeholder.com/150';
};

// Handle category click to show products
const onCategoryClicked = (category: string) => {
  selectedCategory.value = category;
  fetchProducts(category); // Fetch the products for the clicked category
};

// Fetch categories when the component mounts
onMounted(fetchCategories);
</script>

<style scoped>
/* General Container */
.crud-container {
  font-family: 'Arial', sans-serif;
  background: #f0f4f8;
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #1d3557;
}

/* Category Cards */
.category-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.product-list {
  margin-top: 40px;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
}

p {
  font-size: 0.9rem;
  color: #666;
}
</style>
