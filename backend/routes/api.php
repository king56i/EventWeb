<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\EventsController;
use App\Http\Controllers\Admin\OrganizersController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::group(['prefix'=>"admin"],function(){
    // organizers
    Route::resource("organizers",OrganizersController::class);
    // events
    Route::resource("events",EventsController::class);

});