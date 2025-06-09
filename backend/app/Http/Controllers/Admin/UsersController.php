<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UsersResource;
use App\Models\ModelHasRoles;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class UsersController extends Controller implements HasMiddleware
{
    //
    public static function middleware()
    {
        return [
            new Middleware('permission:update user',only:['update','edit']),
            new Middleware('permission:create user',only:['create','store']),
            new Middleware('permission:delete user',only:['destroy','deleteUsers']),
            new Middleware('permission:view user',only:['index']),
        ];
    }
    public function index(){
        $users = User::all();
        return UsersResource::collection($users);
    }
    public function store(UserRequest $userRequest){
        $data = $userRequest->validated();
        $user =User::create(['name'=>$data['name'],'password'=>bcrypt($data['password']),'email'=>$data['email']]);
        $user->syncRoles($data['roles']);
        return response()->json(['success'=>true,'message'=>'Thêm người dùng thành công']);
    }
    public function edit(User $user){
        $userRoles = ModelHasRoles::where('model_id', $user->id)
        ->pluck('role_id')
        ->toArray();
        $data = [
            'user'=>new UsersResource($user),
            'userRoles'=>$userRoles
    ];
        return response()->json($data);
    }
    
    public function update(User $user, UserRequest $userRequest){
        $data = $userRequest->validated();
        $user->update(['name'=>$data['name'],'password'=>$data['password'],'email'=>$data['email']]);
        $user->syncRoles($data['roles']);
        return response()->json(['success'=>true,'message'=>'Sửa người dùng thành công']);
    }
    public function destroy(User $user){
        $user->delete();
        return response()->json(['success'=>true,'message'=>'Xóa người dùng thành công']);
    }
    public function deleteUsers(Request $request){
        $users = $request->users;
        User::whereIn('id',$users)->delete();
        return response()->json(['success'=>true,'message'=>'Xóa những người dùng đã chọn thành công']);
    }
}
