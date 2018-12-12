<template>
<div class="home">
    <div class="col-md-12">
        <sub-header></sub-header>
        <!-- table -->
        <div class="row">
            <div class="col-md-12">
                <div class="home__buttons">
                    <button type="button" class="btn btn-primary">16 Deliverables</button>
                    <button type="button" class="btn btn-success">124 Tasks</button>
                    <button type="button" class="btn btn-danger">26 Issues</button>
                    <button type="button" class="btn btn-warning">37 Actions Items</button>
                </div>
            </div>
        </div>
        <div class="table-component">
            <table class="table">
                <thead>
                    <tr class="table__header">
                        <th>First</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >Mark</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import subHeader from '../../../components/global/subHeader.vue';

export default {
    components: {
        subHeader,
    }
}
</script>
