<template>
    <div class="pageSize">
        <div class="row">
            <sub-header></sub-header>
        </div>
        <div class="del__header">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="del__header--left"><strong>Deliverables</strong></h5>
                </div>
                <div class="col-md-6">
                    <button type="button" class="btn btn-primary del__header--right" data-toggle="modal" data-target="#exampleModal">
                        Create Task
                    </button>
                </div>
            </div>
        </div>
        <div class="row">
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
        <div class="row">
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header table__header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-8">
                                        <label for="exampleInputEmail1">Name </label>
                                        <input type="email" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="exampleInputEmail1">Date</label>
                                        <input type="email" class="form-control" id="dueDate" aria-describedby="emailHelp" placeholder="Due Date">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
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
    },
    methods:{
        showModal(){
            $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
        }
    },

}
</script>
