// createWebHistory

// The createWebHistory function is used to configure the router to use HTML5 History mode. In this mode, the URL reflects the current state of the application without needing a hash (#) in the URL.

/*
synatx

import { createWebHistory } from 'vue-router';

const history = createWebHistory();

In this context, createWebHistory:


Allows clean URLs without a hash (#), e.g., /about instead of /#/about.
Makes use of the HTML5 History API (i.e., pushState and replaceState), which allows for more natural navigation behavior, like the ability to use browser features like back and forward buttons.


Example

const router = createRouter({
  history: createWebHistory(),  // This is the key part for enabling HTML5 history mode
  routes,
});

*/


/*
Html5 History Mode

Without HTML5 history mode (when using createWebHashHistory), URLs would look like:
http://localhost:8080/#/about

With createWebHistory, the URL will look like:
http://localhost:8080/about

This makes the URL cleaner and easier to use with modern browsers and search engines.



*/

