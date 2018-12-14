import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './views/home/index.vue';
import deliverables from './views/deliverables/index.vue';
import actionItems from './views/actionItems/index.vue';
import issues from './views/issues/index.vue';
import resources from './views/resources/index.vue';
import tasks from './views/tasks/index.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: '/', component: home },
        { path: '/deliverables', component: deliverables},
        { path: '/tasks', component: tasks},
        { path: '/issues', component: issues},
        { path: '/resources', component: resources},
        { path: '/actionItems', component: actionItems},
    ]
});

export default router;
