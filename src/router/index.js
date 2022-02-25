import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AdminView from "../views/admin/AdminView.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminView,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router