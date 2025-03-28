<template>
  <div class="category-card" @click="handleClick">
    <img :src="categoryImage" alt="Category Image" />
    <h3>{{ categoryName }}</h3>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

// Define the props passed to the component
const props = defineProps({
  categoryName: {
    type: String,
    required: true
  },
  categoryImage: {
    type: String,
    required: true
  }
});

// Define the event that will be emitted
const emit = defineEmits<{
  (event: 'categoryClicked', category: string): void;
}>();

// Handle the category click
const handleClick = () => {
  emit('categoryClicked', props.categoryName); // Emit the event with category name
};
</script>

<style scoped>
.category-card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.category-card h3 {
  margin-top: 10px;
  font-size: 1.2rem;
}
</style>
