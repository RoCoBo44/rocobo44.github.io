import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Curriculum from '@/pages/Curriculum.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/curriculum',
            name: 'curriculum',
            component: Curriculum
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

router.afterEach((to) => {
    if (to.name === 'curriculum') {
        document.title = '[PORT]folio'
    } else {
        document.title = 'C0Bz'
    }
})

export default router
