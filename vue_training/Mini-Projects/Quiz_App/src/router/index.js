import { createRouter, createWebHashHistory } from "vue-router";
import QuizesView from "@/views/QuizesView.vue";
import QuizView from "@/views/QuizView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: "/",
            name :"quizes",
            component : QuizesView
        },
        {
            path: "/quiz/:id",
            name :"quize",
            component : QuizView
        }
    ]
})

export default router;