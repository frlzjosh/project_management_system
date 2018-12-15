<template>
    <div class="pageSize">
        <div class="row">
            <sub-header></sub-header>
        </div>
        <div class="pageSize__header">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="pageSize__header--left"><strong>Resources</strong></h5>
                </div>
                <div class="col-md-6">
                    <button type="button" class="btn btn-primary pageSize__header--right" data-toggle="modal" data-target="#exampleModal">
                        Add
                    </button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <!-- issues table -->
                <div class="table-component">
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
                                <td>Hank Pym</td>
                                <td>6/10/19</td>
                                <td>12/05/19</td>
                                <td>High</td>
                                <td>High</td>
                                <td>Create Resources</td>
                            </tr>
                            <tr>
                                <td>Peter Parker</td>
                                <td>6/10/19</td>
                                <td>12/01/19</td>
                                <td>Medium</td>
                                <td>Low</td>
                                <td>Create Resources Creation Page</td>
                            </tr>
                            <tr>
                                <td>Tony Stark</td>
                                <td>6/10/19</td>
                                <td >12/30/19</td>
                                <td>Medium</td>
                                <td>Low</td>
                                <td>Create Resources Editing Page</td>
                            </tr>
                            <tr>
                                <td>Bruce Banner</td>
                                <td>6/10/19</td>
                                <td>12/01/19</td>
                                <td>High</td>
                                <td>Medium</td>
                                <td>Creating A Single Resources Display Page</td>
                            </tr>
                            <tr>
                                <td>Steve Rodgers</td>
                                <td>6/10/19</td>
                                <td>12/10/19</td>
                                <td>Medium</td>
                                <td>Low</td>
                                <td>Task Display for Resources</td>
                            </tr>
                        </tbody>
                    </table> <!--end table -->
                </div>
            </div>
        </div>
        <!-- task form -->
        <div class="form__pms">
            <form>
                <div class="form__pms-header">
                    <div class="row">
                        <div class="col-md-5">
                            <p><strong>ID: </strong> EMP-03</p>
                        </div>
                        <div class="col-md-5 type--left">
                            <p><strong>Name: </strong> Bruce Banner</p>
                        </div>
                        <div class="col-md-2 type--right">
                            <button type="button" class="btn btn-outline-danger">Closed</button>
                        </div>
                    </div>
                </div>
                <div class="form__pms-body--md padding--top-sm">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="titleOfIssue"><strong>Title</strong></label>
                                <input type="email" class="form-control" id="titleOfDeliverable" placeholder="Enter Issue">
                            </div>
                            <div class="col-md-6">
                                <label for="payRate"><strong>Pay Rate</strong></label>
                                <input type="payRate" class="form-control" id="relatedTask" aria-describedby="emailHelp" placeholder="$30.00">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-12 padding--top-sm">
                                <h6><strong>Description</strong></h6>
                                <textarea class="form-control" id="description" rows="6" placeholder="Enter Description..."></textarea>
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
                                        <input type="email" class="form-control" id="relatedIssues" aria-describedby="emailHelp" placeholder="Related Resources">
                                    </div>
                                    <div class="col-md-3 padding--top">
                                        <button type="button" class="btn btn-info">Add </button>
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
