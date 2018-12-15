require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import storeData from './store';
import router from "./router";

window.Vue = require('vue');
Vue.use(Vuex);

const store = new Vuex.Store(storeData);


import App from "./App.vue";

const app = new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App)
});

export default app;
