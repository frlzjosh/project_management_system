import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './views/home/index.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: '/', component: home },
    ]
});

export default router;