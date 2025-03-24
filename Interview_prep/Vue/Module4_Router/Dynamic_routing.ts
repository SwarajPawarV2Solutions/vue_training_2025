// Dynamic routing

// Adding routes to your router is usually done via the routes option but in some situations, you might want to add or remove routes while the application is already running. Applications with extensible interfaces like Vue CLI UI can use this to make the application grow.



/*
  Adding Routes
  
  Dynamic routing is achieved mainly via two functions: router.addRoute() and router.removeRoute(). They only register a new route, meaning that if the newly added route matches the current location, it would require you to manually navigate with router.push() or router.replace() to display that new route. Let's take a look at an example:


*/

