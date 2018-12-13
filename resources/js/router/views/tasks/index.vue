<template>
    <div class="pageSize">
        <div class="row">
            <sub-header></sub-header>
        </div>
        <div class="pageSize__header">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="pageSize__header--left"><strong>Tasks</strong></h5>
                </div>
                <div class="col-md-6">
                    <button type="button" class="btn btn-primary pageSize__header--right" data-toggle="modal" data-target="#exampleModal">
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
                                <th>Assigned Resource</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Task 1</td>
                                <td>12/05/19</td>
                                <td>63%</td>
                                <td>Create Tasks Display Page</td>
                                <td>Steve</td>
                            </tr>
                            <tr>
                                <td>Task 2</td>
                                <td>12/10/19</td>
                                <td>23%</td>
                                <td>Create Tasks Creation Page</td>
                                <td>Hank</td>
                            </tr>
                            <tr>
                                <td>Task 3</td>
                                <td>12/30/19</td>
                                <td>90%</td>
                                <td>Create Tasks Editing Page</td>
                                <td>Banner</td>
                            </tr>
                            <tr>
                                <td>Task 4</td>
                                <td>12/01/19</td>
                                <td>57%</td>
                                <td>Creating A Single Tasks Display Page </td>
                                <td>Thor</td>

                            </tr>
                            <tr>
                                <td>Task 5</td>
                                <td>12/10/19</td>
                                <td>25%</td>
                                <td>Resource Display for Tasks</td>
                                <td>Peter</td>
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
                        <div class="col-md-10">
                            <p><strong>ID: </strong> SP-223</p>
                            <p><strong>Estimated Duration: </strong> 6/30/19 - 12/03/19 (6 MO.)</p>
                        </div>
                        <div class="col-md-2 type--right">
                            <button type="button" class="btn btn-outline-success">Active</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p><strong>Preceeded By: </strong> SP-221</p>
                            <p><strong>Succeeded By: </strong> SP-224</p>
                        </div>
                    </div>
                </div>
                <div class="form__pms-body">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-9">
                                <label for="titleOfTasks">Title</label>
                                <input type="email" class="form-control" id="titleOfTasks" placeholder="Enter Task">
                            </div>
                            <div class="col-md-3">
                                <label for="dueDateTasks">Due Date</label>
                                <input type="email" class="form-control" id="expectedStartDate" aria-describedby="emailHelp" placeholder="Start">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-12 padding--top ">
                                <label for="descriptionOfTasks"><strong>Tasks</strong></label>
                                <textarea class="form-control" id="description" rows="3" placeholder="Enter Description..."></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 type--right padding--top-sm">
                                <button type="button" class="btn btn-primary pageSize__header--right">Confirm Edits</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
         <div class="container-fluid no-padding">
             <div class="row padding--top-remove">
                 <div class="col-md-12">
                     <h6><strong>Related Requirements</strong></h6>
                 </div>
             </div>
             <div class="row">
                 <div class="col-md-12">
                    <div class="padding--top-sm">
                        <div class="table-component ">
                            <div class="table-responsive table-responsive-fix">
                            <table class="w-100 d-block d-md-table table table-hover">
                                <thead>
                                    <tr class="table__header">
                                        <th>Title</th>
                                        <th>Date Raised</th>
                                        <th>Date Assigned</th>
                                        <th>Severity</th>
                                        <th>Priority</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Task 1</td>
                                        <td>6/10/19</td>
                                        <td>12/05/19</td>
                                        <td>High</td>
                                        <td>High</td>
                                        <td>Create Tasks</td>
                                    </tr>
                                    <tr>
                                        <td>Task 2</td>
                                        <td>6/10/19</td>
                                        <td>12/01/19</td>
                                        <td>Medium</td>
                                        <td>Low</td>
                                        <td>Create Tasks Creation Page</td>
                                    </tr>
                                    <tr>
                                        <td>Task 3</td>
                                        <td>6/10/19</td>
                                        <td >12/30/19</td>
                                        <td>Medium</td>
                                        <td>Low</td>
                                        <td>Create Tasks Editing Page</td>
                                    </tr>
                                    <tr>
                                        <td>Task 4</td>
                                        <td>6/10/19</td>
                                        <td>12/01/19</td>
                                        <td>High</td>
                                        <td>Medium</td>
                                        <td>Creating A Single Tasks Display Page</td>
                                    </tr>
                                    <tr>
                                        <td>Task 5</td>
                                        <td>6/10/19</td>
                                        <td>12/10/19</td>
                                        <td>Medium</td>
                                        <td>Low</td>
                                        <td>Task Display for Tasks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
                                        <label for="title">Title </label>
                                        <input type="email" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="estimation">Estimation</label>
                                        <input type="email" class="form-control" id="dueDate" aria-describedby="emailHelp" placeholder="Effort Estimation...">
                                    </div>
                                </div>
                                <div class="row padding--top-sm">
                                    <div class="col-md-12">
                                        <textarea class="form-control" id="description" rows="3" placeholder="Enter Description..."></textarea>
                                    </div>
                                </div>
                                <!-- assign resource -->
                                <div class="row padding--top-sm">
                                    <div class="col-md-12 ">
                                        <input type="email" class="form-control" id="assignResource" aria-describedby="emailHelp" placeholder="Assign Resource">
                                    </div>
                                </div>
                                <div class="row padding--top-sm">
                                    <div class="col-md-3 ">
                                        <input type="email" class="form-control" id="expectedStartDate" aria-describedby="emailHelp" placeholder="Start">
                                    </div>
                                    <div class="col-md-3">
                                        <input type="email" class="form-control" id="expectedDueDate" aria-describedby="emailHelp" placeholder="End">
                                    </div>
                                    <div class="col-md-6">
                                        <p>Expected Duration: 0 Weeks</p>
                                    </div>
                                </div>
                                <div class="row padding--top-sm">
                                    <div class="col-md-9">
                                        <input type="email" class="form-control" id="relatedIssues" aria-describedby="emailHelp" placeholder="Related Issues">
                                    </div>
                                    <div class="col-md-3">
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
