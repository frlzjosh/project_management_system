<template>
<div>
    <div class="row">
        <div class="col-md-2">
            <sidebar></sidebar>
        </div>
        <div class="col-md-10">
            <table-component></table-component>
        </div>
    </div>
</div>

</template>

<script>
import sidebar from '../../../components/sidebar';
import tableComponent from '../../../components/tableComponent';
export default {
    components: {
        sidebar,
        tableComponent
        },
}
</script>
