<?php

use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\EventsController;
use App\Http\Controllers\Admin\OrganizersController;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\PermissionsController;

Route::group(['middleware'=>['role:admin|employee','auth:api'],'prefix'=>"admin"],function(){
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
    // roles
    Route::resource("roles",RolesController::class);
    Route::prefix('roles')->group(function(){
        Route::post('/delete-roles',[RolesController::class,'deleteRoles']);
        Route::get('/{role}/add-perms-to-role',[RolesController::class,'addPermsToRole']);
        Route::put('/{role}/add-perms-to-role',[RolesController::class,'givePermsToRole']);
    });
    // permissions
    Route::resource('permissions',PermissionsController::class);
    Route::post('permissions/delete-permissions',[PermissionsController::class,'deletePermissions']);
    // users
    Route::resource('users',UsersController::class);
    Route::post('users/delete-users',[UsersController::class,'deleteUsers']);
    // notifications
    Route::resource('notifications',NotificationController::class)->except(['edit','show','update','create','store']);
    Route::post('notifications/delete-notifications',[NotificationController::class,'deleteNotifications']);
});
// dn-dk
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});