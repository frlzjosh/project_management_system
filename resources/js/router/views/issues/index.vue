<template>
    <div class="pageSize">
        <div class="row">
            <sub-header></sub-header>
        </div>
        <div class="pageSize__header">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="pageSize__header--left"><strong>Issues</strong></h5>
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
                                <td>Issues 1</td>
                                <td>6/10/19</td>
                                <td>12/05/19</td>
                                <td>High</td>
                                <td>High</td>
                                <td>Create Issues</td>
                            </tr>
                            <tr>
                                <td>Issues 2</td>
                                <td>6/10/19</td>
                                <td>12/01/19</td>
                                <td>Medium</td>
                                <td>Low</td>
                                <td>Create Issues Creation Page</td>
                            </tr>
                            <tr>
                                <td>Issues 3</td>
                                <td>6/10/19</td>
                                <td >12/30/19</td>
                                <td>Medium</td>
                                <td>Low</td>
                                <td>Create Issues Editing Page</td>
                            </tr>
                            <tr>
                                <td>Issues 4</td>
                                <td>6/10/19</td>
                                <td>12/01/19</td>
                                <td>High</td>
                                <td>Medium</td>
                                <td>Creating A Single Issues Display Page</td>
                            </tr>
                            <tr>
                                <td>Issues 5</td>
                                <td>6/10/19</td>
                                <td>12/10/19</td>
                                <td>Medium</td>
                                <td>Low</td>
                                <td>Task Display for Issues</td>
                            </tr>
                        </tbody>
                    </table> <!--end table -->
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
                            <p><strong>Date Raised: </strong> 6/30/19</p>
                            <p><strong>Estimated Duration: </strong> 6/30/19 - 12/03/19 (6 MO.)</p>
                        </div>
                        <div class="col-md-2 type--right">
                            <button type="button" class="btn btn-outline-danger">Closed</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <p><strong>Estimated End Date: </strong>12/03/19</p>
                        </div>
                        <div class="col-md-6">
                            <p><strong>Actual End Date: </strong> 12/10/19</p>
                        </div>
                    </div>
                </div>
                <div class="form__pms-body">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-9">
                                <label for="titleOfIssue"><strong>Title</strong></label>
                                <input type="email" class="form-control" id="titleOfDeliverable" placeholder="Enter Issue">
                            </div>
                            <div class="col-md-3">
                                <label for="relatedTask"><strong>Related Task</strong></label>
                                <input type="email" class="form-control" id="relatedTask" aria-describedby="emailHelp" placeholder="Related Task">
                            </div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose Resource
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Peter Parker</a>
                            <a class="dropdown-item" href="#">Stever Rodgers</a>
                            <a class="dropdown-item" href="#">Thor Odinson</a>
                            <a class="dropdown-item" href="#">Hank Pym</a>
                            <a class="dropdown-item" href="#">Bruce Banner</a>
                            <a class="dropdown-item" href="#">Black Widow</a>
                            <a class="dropdown-item" href="#">Tony Stark</a>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-12 padding--top ">
                                <label for="descriptionOfIssues"><strong>Issues</strong></label>
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
                                        <th>Due Date</th>
                                        <th>ID</th>
                                        <th>Assigned Resource</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Requirement 1</td>
                                        <td>12/05/19</td>
                                        <td>REQ-32</td>
                                        <td>Peter</td>
                                        <td>Create Issues</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement 2</td>
                                        <td>12/01/19</td>
                                        <td>REQ-33</td>
                                        <td>Thor</td>
                                        <td>Create Issues Creation Page</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement 3</td>
                                        <td >12/30/19</td>
                                        <td>REQ-34</td>
                                        <td>Hank</td>
                                        <td>Create Issues Editing Page</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement 4</td>
                                        <td>12/01/19</td>
                                        <td>REQ-29</td>
                                        <td>Odin</td>
                                        <td>Creating A Single Issues Display Page</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement 5</td>
                                        <td>12/10/19</td>
                                        <td>REQ-31</td>
                                        <td>Steve</td>
                                        <td>Task Display for Issues</td>
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
