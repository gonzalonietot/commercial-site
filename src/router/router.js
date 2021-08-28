import VueRouter from 'vue-router';
import Base from '@/components/Base';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: Base, component: Base, path: '/'
        },
        {
            name: Base, component: Base, path: '/home'
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to, from, next);
    next();
})

export default router;