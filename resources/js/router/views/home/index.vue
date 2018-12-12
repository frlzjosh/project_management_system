<template>
<div class="home">
    <div class="col-md-12">
        <sub-header></sub-header>
        <!-- table -->
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
