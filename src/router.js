import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/:pathMatch(.*)*', component: () => import('./views/Error.vue') },
    { path: '/', component: () => import('./views/Freefire.vue') },
    { path: '/admin', component: () => import('./views/Admin.vue') },
    { path: '/user', component: () => import('./views/User.vue') },
    
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router