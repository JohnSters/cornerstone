import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AdminView from "../views/admin/AdminMainView.vue";
import CreateUser from "../views/admin/CreateUserView.vue";
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
    {
        path: '/admin',
        name: 'Admin',
        component: AdminView,
        children: [
            {
                path: '/create-user',
                name: 'CreateUser',
                component: CreateUser,
            }
        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router