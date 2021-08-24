import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes: []
});

router.beforeEach((to, from, next) => {
    console.log(to, from, next);
})

export default router;