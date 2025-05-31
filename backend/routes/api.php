<?php

use App\Http\Controllers\Admin\EventsController;
use App\Http\Controllers\Admin\OrganizersController;
use Illuminate\Support\Facades\Route;
Route::group(['prefix'=>"admin"],function(){
    // organizers
    Route::resource("organizers",OrganizersController::class);
    // events
    Route::resource("events",EventsController::class);

});