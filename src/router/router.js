import VueRouter from 'vue-router';
import BaseForm from '@/components/BaseForm';
import Login from '@/pages/Login';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: BaseForm, component: BaseForm, path: '/', auth: true
        },
        {
            name: BaseForm, component: BaseForm, path: '/home', auth: true
        },
        {
            name: Login, component: Login, path: '/login', auth: false
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to, from, next);
    next();
})

export default router;