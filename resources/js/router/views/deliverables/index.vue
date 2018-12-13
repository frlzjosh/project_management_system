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
                                <td>Create Deliverables Creation Page</td>
                            </tr>
                            <tr>
                                <td>Deliverable Task 3</td>
                                <td>12/30/19</td>
                                <td>90%</td>
                                <td>Create Deliverables Editing Page</td>
                            </tr>
                            <tr>
                                <td>Deliverable Task 4</td>
                                <td>12/01/19</td>
                                <td>57%</td>
                                <td>Creating A Single Deliverables Display Page </td>

                            </tr>
                            <tr>
                                <td>Deliverable Task 5</td>
                                <td>12/10/19</td>
                                <td>25%</td>
                                <td>Task Display for Deliverables</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- task form -->
        <div class="form__pms">
            <form >
                <div class="form__pms-header">
                    <div class="row">
                        <div class="col-md-6">
                            <p><strong>ID: </strong> SP-221</p>
                        </div>
                        <div class="col-md-6 type--right">
                            <button type="button" class="btn btn-outline-success">Active</button>
                        </div>
                    </div>
                </div>
                <div class="form__pms-body">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-9">
                                <label for="titleOfDeliverable">Title</label>
                                <input type="email" class="form-control" id="titleOfDeliverable" placeholder="Enter Deliverable">
                            </div>
                            <div class="col-md-3">
                                <label for="dueDateDeliverable">Due Date</label>
                                <input type="email" class="form-control" id="expectedStartDate" aria-describedby="emailHelp" placeholder="Start">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-12 padding--top ">
                                <label for="descriptionOfDeliverable"><strong>Deliverable</strong></label>
                                <textarea class="form-control" id="description" rows="3" placeholder="Enter Description..."></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 type--right padding--top-sm">
                                <button type="button" class="btn btn-primary del__header--right">Confirm Edits</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="row">
                <div class="col-md-12">
                    <div class="padding--top-sm">
                        <div class="table-component">
                            <table class="table">
                                <thead>
                                    <tr class="table__header">
                                        <th>First</th>
                                        <th>Due Date</th>
                                        <th>ID</th>
                                        <th>Assigned Resources</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >Requirement 1</td>
                                        <td >12/05/19</td>
                                        <td >REQ-32</td>
                                        <td >Peter Parker</td>
                                        <td >Create Deliverables</td>
                                    </tr>
                                    <tr>
                                        <td >Requirement 2</td>
                                        <td >12/01/19</td>
                                        <td >REQ-33</td>
                                        <td >Thor</td>
                                        <td>Create Deliverables Creation Page</td>
                                    </tr>
                                    <tr>
                                        <td >Requirement 3</td>
                                        <td >12/30/19</td>
                                        <td >REQ-34</td>
                                        <td >Hank<td>
                                        <td>Create Deliverables Editing Page</td>
                                    </tr>
                                    <tr>
                                        <td >Requirement 4</td>
                                        <td >12/01/19</td>
                                        <td >REQ-29</td>
                                        <td >Odin<td>
                                        <td>Creating A Single Deliverables Display Page</td>
                                    </tr>
                                    <tr>
                                        <td >Requirement 5</td>
                                        <td >12/10/19</td>
                                        <td >REQ-31</td>
                                        <td >Steve<td>
                                        <td>Task Display for Deliverables</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="row">
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header table__header">
                            <h5 class="modal-title" id="exampleModalLabel">Task Creation</h5>
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
                                <div class="row">
                                    <div class="col-md-12 padding--top ">
                                        <textarea class="form-control" id="description" rows="3" placeholder="Enter Description..."></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 padding--top">
                                        <input type="email" class="form-control" id="assignResource" aria-describedby="emailHelp" placeholder="Assign Resource">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 padding--top">
                                        <input type="email" class="form-control" id="expectedStartDate" aria-describedby="emailHelp" placeholder="Start">
                                    </div>
                                    <div class="col-md-3 padding--top">
                                        <input type="email" class="form-control" id="expectedDueDate" aria-describedby="emailHelp" placeholder="End">
                                    </div>
                                    <div class="col-md-6 padding--top">
                                        <p>Expected Duration: 0 Weeks</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 padding--top">
                                        <input type="email" class="form-control" id="relatedIssues" aria-describedby="emailHelp" placeholder="Related Issues">
                                    </div>
                                    <div class="col-md-3 padding--top">
                                        <button type="button" class="btn btn-info">Create task</button>
                                    </div>
                                </div>
                            </div>
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
