const fetchAllDeliverablesAPI = (payload, success, error ) =>{
    axios.get('api/deliverables/all')
    .then(
        response => {
            success( response.data);
        },
        ).catch(
            failure=>{
                console.log("error: " + failure.response.data);
            }
        );
}
