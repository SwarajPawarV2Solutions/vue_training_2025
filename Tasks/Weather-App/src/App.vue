<template>
     <router-view />
</template>

<script setup>
</script>

<style  >
 .search-box {
  width: 100%;
  max-width: 400px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 50px;
  border: 2px solid #007bff;
  background-color: #fff;
  color: black;
  outline: none;
  transition: all 0.3s ease;
  margin-right: 20px;
}

.search-box::placeholder {
  color: #007bff;
  opacity: 0.7;
}

.search-box:hover {
  border-color: #007bff;
}

.search-box:focus {
  border-color: #007bff;
  background-color: #fff;
  box-shadow: 0 0 12px #0056b3;
}

.search-box:focus::placeholder {
  color: black;
}

/* Toggle Button */
.toggle-btn {
  background-color: #fff; 
  color: black; 
  border: 2px solid #007bff;
  padding: 14px 30px; 
  font-size: 18px; 
  border-radius: 50px; 
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.toggle-btn:hover {
  background-color: #0056b3; 
  color: #fff; 
  transform: translateY(-2px); 
}

.toggle-btn:active {
  background-color: #007bff;
  color: #fff;
  transform: translateY(0); 
}

.toggle-btn:focus {
  box-shadow: 0 0 12px rgba(76, 175, 80, 0.5); 
}

/* Cards container */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

/* Card for each weather data item */
.weather-card {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.weather-card h2 {
  margin-top: 0;
  font-size: 25px;
  color: #007bff;
  font-weight: bold;
}

.weather-card p {
  margin: 10px 0;
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.container.h1{
  justify-content: center;
  align-items: center;
}

/* error message card */

.error-card {
  padding: 10px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px auto;
  text-align: center;
}

/* dropdown  */


.dropdown-item {
  padding: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #87CEEB;
}


</style>