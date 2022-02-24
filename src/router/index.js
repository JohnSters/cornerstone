import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import AdminPage from "../views/AdminPage.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router