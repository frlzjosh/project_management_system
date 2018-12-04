require('./bootstrap');
import Vue from 'vue';

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'));

import { mapGetters } from 'vuex';
const app = new Vue({
    el: '#app'
});
