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
    Route::post('/organizers/delete-organizers',[OrganizersController::class,'deleteOrganizers']);

    // events
    Route::resource("events",EventsController::class)->except('show');
    Route::prefix('events')->group(function(){
        Route::get('trashcan',[EventsController::class,'trashcan']);
        Route::post('/trashcan/{id}',[EventsController::class,'restore']);
        Route::delete('/trashcan/{id}',[EventsController::class,'forceDelete']);
        Route::post('/delete-events',[EventsController::class,'deleteEvents']);
        Route::post('/delete-forever-events',[EventsController::class,'deleteForeverEvents']);
        Route::post('/restore-events',[EventsController::class,'restoreEvents']);

    });

});