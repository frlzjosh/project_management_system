export default {

    state: {
        // deliverables state
        deliveriables: [],
        deliverableID: [],
    },
    getters:{
        getdeliveriables(state){
            return state.deliveriables;
        },
        deliverablesByID: (state, getters) => (id) => {
            const index = getters.deliverables.filter(del => del.id == id);
            return getters.deliveriables[index];
        },
        deliverableByID: (state, getters) => id => {
            const deliverable = getters.deliverableByID(id);
            return deliverables.deliverable;
        },
    },
    mutations:{
            SET_DELIVERABLES_ID(state, payload){
                payload.forEach(element => {
                    state.deliveriables = (element.id);
                });
            }
        // login(state){
        //     state.loading = true;
        //     state.auth_error = null;
        // },
        // loginSuccess(state, payload) {
        //     state.auth_error = null;
        //     state.isLoggedIn = true;
        //     state.loading = false;
        //     state.currentUser = payload;
        //     console.log(payload);
        //     localStorage.setItem("user", JSON.stringify(state.currentUser));
        // },
        // loginFailed(state, payload){
        //     state.loading = false;
        //     state.auth_error = payload.error;
        // },
        // logout(state) {
        //     localStorage.removeItem("user");
        //     state.isLoggedIn = false;
        //     state.currentUser = null;
        // },
        // updateproducts(state, payload){
        //     console.log("hello" + payload);
        //     state.products = payload;
        // }
    },
    actions:{
        allDeliverables(context){
            axios.get('api/deliverables/all')
            .then((response) =>{
                context.commit("SET_DELIVERABLES_ID", response.data);
            },
            );
        }
    //     login(context){
    //         context.commit("login");
    //     },
    //     getProducts(context){
    //         // console.log("goodbye" + context.state.currentUser.token.token);
    //         axios.get(
    //             '/api/getAllProducts', {
    //                 headers: {
    //                     // "X-Requested-With": `XMLHttpRequest`,
    //                     // "Content-Type": `application/json`,
    //                     "Authorization": `Bearer ${context.state.currentUser.token.token}`
    //                 }
    //             })
    //             .then((response) => {
    //                 // console.log(headers);
    //                 // console.log(response.headers);

    //                 context.commit('updateproducts', response.data);
    //             })
    //     },
    //     sendReview(context, payload){
    //         // console.log("goodbye" + context.state.currentUser.token.token);
    //         axios.post(
    //             '/api/createReview', {
    //                 headers: {
    //                     // "X-Requested-With": `XMLHttpRequest`,
    //                     // "Content-Type": `application/json`,
    //                     "Authorization": `Bearer ${context.state.currentUser.token.token}`
    //                 }, payload
    //             })
    //             .then((Response) => {
    //                 // res(Response.data);
    //                 console.log(Response.data);
    //             })
    //             .catch((err) =>{
    //                 rej("Wrong email or password");
    //             })
    //     }
    }
}
