<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RoleRequest;
use App\Http\Resources\PermissionsResource;
use App\Http\Resources\RoleHasPermissionsResource;
use App\Http\Resources\RolesResource;
use App\Models\RoleHasPermissions;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    //
    public function index(){
        $roles = Role::all();
        return RolesResource::collection($roles);
    }
    public function store(RoleRequest $roleRequest){
        $data = $roleRequest->validated();
        Role::create($data);
        return response()->json(['success'=>true,'message'=>'Thêm vai trò thành công']);
    }
    public function edit(Role $role){
        return new RolesResource($role);
    }
    public function update(Role $role,RoleRequest $roleRequest){
        $data = $roleRequest->validated();
        $role->update($data);
        return response()->json(['success'=>true,'message'=>'Sửa vai trò thành công']);
    }
    public function destroy(Role $role){
        $role->delete();
        return response()->json(['success'=>true,'message'=>'Xóa vai trò thành công']);
    }
    public function deleteRoles(Request $request){
        $roles = $request->roles;
        Role::whereIn('id',$roles)->delete();
        return response()->json(['success'=>true,'message'=>'Xóa những vai trò đã chọn thành công']);
    }
    public function addPermsToRole(Role $role){
        $rolePerms = new RoleHasPermissionsResource(RoleHasPermissions::where('role_id',$role->id)->pluck('permission_id','permission_id')->all());
        return response()->json([
            'rolePermissions'=>$rolePerms,
            'role'=>$role,
        ]);
    }
    public function givePermsToRole(Role $role,Request $request){
        $request->validate([
            'permission'=>'required'
        ]);
        $role->syncPermissions($request->permission);
        return response()->json(['success'=>true,'message'=>'Thêm quyền vào vai trò thành công']);
    }
}
