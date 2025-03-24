// Throttling in JavaScript

// Throttling is a technique used to limit the rate at which a function is executed. It is particularly useful in situations where a function is being triggered continuously, but we want to limit how often it actually runs.

// Imagine a function that gets called every time a user scrolls a page. Without throttling, the function might get called hundreds or thousands of times per second, leading to performance issues.


/*
  
                                                Throttling


Throttling limits the number of times a function is executed over a certain time period. It ensures that the function is called at a controlled, steady rate, regardless of how frequently the event triggering the function occurs.
*/


/* 

Why is Throttling Used?

Throttling is used to:

1. Improve performance: Reduces the frequency of function calls and prevents performance bottlenecks.
2. Prevent overloading resources: Some functions can be computationally expensive (like network requests or DOM manipulation). Throttling ensures they don't run too frequently.
3. Manage event listeners: Events like scrolling, resizing, or mouse movements can fire too frequently, and throttling helps you manage how often your handler executes.

*/



/*

 Applications of Throttling


1. Scroll Events:

  * When you track user scroll position or load more content as the user scrolls, throttling can prevent performance    degradation.
  * Example: Infinite scrolling (loading content as the user scrolls down).
  
  
2. Resize Events:

  * When a window is resized, a resize event can be fired very frequently. Throttling helps reduce the frequency of event handler calls.
  * Example: Recalculating layouts or resizing elements based on window size.
   
  
3. Mouse Movement Tracking:

  * For performance reasons, it's important to throttle event listeners that track mouse movements (like showing a tooltip or interactive feature).
  * Example: Implementing an interactive game or tracking user's mouse position on the page.
   
  
4. API Requests:

  * When making API calls that are triggered by events like typing (auto-suggestions), you may want to throttle requests to prevent sending too many requests in a short time.
  * Example: Search auto-complete feature where requests are throttled as the user types.


*/


// Imagine you have a web page with a scrolling event that triggers some action, like loading more content. Without throttling, if the user scrolls quickly, the action might be triggered multiple times in rapid succession. Throttling ensures that the action is executed at a fixed interval.

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}

const throttledScrollHandler = throttle(() => {
  console.log("Loading more content...");
}, 1000);

window.addEventListener("scroll", throttledScrollHandler);


// In this example, the throttle function wraps the original function (scrollHandler) and ensures that it's called at most once every 1000 milliseconds (1 second) no matter how quickly the user scrolls.

