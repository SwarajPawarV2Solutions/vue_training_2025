import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

// createApp(App).use(router).mount('#app')
const app = createApp(App);
app.use(router); // Using the router
app.use(ToastPlugin); // Add Vue Toastification to your app
app.mount("#app"); // Mount your app
