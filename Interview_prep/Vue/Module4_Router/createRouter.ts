// 1. createRouter
// The createRouter function is used to create a new router instance in a Vue 3 application. This router instance will be responsible for managing all the routing functionality in your app.


// Syntax
// import { createRouter } from 'vue-router';

// const router = createRouter(options);


/*
Options passed to createRouter typically include:

history: Defines how to manage navigation history. You can use createWebHistory for HTML5 History API-based navigation or createWebHashHistory for hash-based routing (e.g., /#/about).

routes: An array of route objects that define your app’s routing structure. Each route typically has a path (URL), a name, and a component (the component to render when that route is visited).

*/