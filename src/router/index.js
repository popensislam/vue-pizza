import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('@/views/Main.vue')
    },
    {
        path: '/cart',
        component: () => import('@/views/Cart.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFound.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router