<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//deliverables
Route::get('deliverables/hello', 'DeliverableController@testing');
Route::get('deliverables/all', 'DeliverableController@getAllDeliverables');


//resources
Route::get('resources/all', 'ResourceController@getAllResources');

//issues
Route::get('issues/all', 'IssueController@getAllIssues');

//action items
Route::get('action-items/all', 'ActionItemController@getAllActionItems');

//tasks
Route::get('tasks/all', 'TaskController@getAllTasks');



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

