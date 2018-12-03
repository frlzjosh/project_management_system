import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default vuex.Store({
    state:{
        count: 0;
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
})
