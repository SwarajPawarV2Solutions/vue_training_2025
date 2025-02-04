<template>
<img class="logo" src="../assets/resto_logo.png"/>
 <h1>Sign Up</h1>
 <div class="register">
    <input type="text" placeholder="Enter Name"/>
    <input type="text" placeholder="Enter Email"/>
    <input type="password" placeholder="Enter Password"/>
    <button>Sign Up</button>
 </div>
</template>

<script>

export default {
    name :'SignUp'
}
</script>

<style>
 .logo{
    width: 100px;
    height: 100px;
 }
 .register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(27, 27, 199);;
 }
 .register button{
   width: 320px;
   height: 40px;
   border: 1px solid rgb(27, 27, 199);;
   color:#fff;
   background-color: rgb(27, 27, 199);
   cursor: pointer;

 }
</style>