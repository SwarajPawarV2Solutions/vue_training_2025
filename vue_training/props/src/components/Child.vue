<!-- Child Component -->
<template>
    <div>
        <h1>Child Component</h1>
        <div v-for="user in users" :key="user.name">
            <h2>{{ user.name }}</h2>
            <h3>{{ user.age }}</h3>
            <h3>{{ user.car }}</h3>
        </div>
        
    </div>
</template>

<script>
     export default {
        name : 'Child',
        props: ['users' ]
     }
</script>