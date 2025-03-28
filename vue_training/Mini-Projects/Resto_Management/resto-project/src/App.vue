<template>
  <router-view />
</template>

<script setup></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  padding: 0;
  margin: 0;
}
.logo {
  width: 100px;
  height: 100px;
}
.register input,
.login input,
.add_restaurant input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #007bff;
}
.register button,
.login button,
.add_restaurant button {
  width: 320px;
  height: 40px;
  border: 1px solid #007bff;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
}
.register button:hover,
.login button:hover,
.add_restaurant button:hover {
  background-color: #0056b3;
}
</style>
