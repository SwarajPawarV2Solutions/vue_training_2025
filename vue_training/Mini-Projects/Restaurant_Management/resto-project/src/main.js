

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';


// createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(router)          // Using the router
app.use(ToastPlugin)     // Add Vue Toastification to your app

app.mount('#app')        // Mount your app