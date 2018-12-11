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
Route::get('deliverable/hello', 'DeliverableController@testing');
Route::get('deliverable/all', 'DeliverableController@getAll');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

