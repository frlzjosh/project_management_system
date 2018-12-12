<template>
    <div class="pageSize del">
        <div class="row">
            <sub-header></sub-header>
        </div>
            <div class="row">
                <div class="col-md-12">
                    <h5 class="del__header"><strong>Deliverables</strong></h5>
                </div>
                <div class="col-md-12">
                    <!-- table -->
                    <div class="table-component">
                        <table class="table">
                            <thead>
                                <tr class="table__header">
                                    <th>Title</th>
                                    <th>Due Date</th>
                                    <th>Completion</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Deliverable Task 1</td>
                                    <td>12/05/19</td>
                                    <td>63%</td>
                                    <td>Create Deliverable Display Page</td>

                                </tr>
                                <tr>
                                    <td>Deliverable Task 2</td>
                                    <td>12/10/19</td>
                                    <td>23%</td>
                                    <td>Improve Deliverables Page</td>

                                </tr>
                                <tr>
                                    <td>Deliverable Task 3</td>
                                    <td>12/30/19</td>
                                    <td>90%</td>
                                    <td>Clear Deliverables Page</td>

                                </tr>
                                <tr>
                                    <td>Deliverable Task 4</td>
                                    <td>12/01/19</td>
                                    <td>57%</td>
                                    <td>Implement Deliverables </td>

                                </tr>
                                <tr>
                                    <td>Deliverable Task 5</td>
                                    <td>12/10/19</td>
                                    <td>25%</td>
                                    <td>Update Client on Deliverables</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
