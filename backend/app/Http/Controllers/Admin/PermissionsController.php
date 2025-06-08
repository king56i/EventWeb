<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\PermissionRequest;
use App\Http\Resources\PermissionsResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionsController extends Controller
{
    //
    public function index(){
        $permissions = Permission::all();
        return PermissionsResource::collection($permissions);
    }
    public function store(PermissionRequest $permissionRequest){
        $data = $permissionRequest->validated();
        Permission::create($data);
        return response()->json(['success'=>true,'message'=>'Thêm quyền lợi thành công']);
    }
    public function edit(Permission $permission){
        return new PermissionsResource($permission);
    }
    public function update(Permission $permission,PermissionRequest $permissionRequest){
        $data = $permissionRequest->validated();
        $permission->update($data);
        return response()->json(['success'=>true,'message'=>'Sửa quyền lợi thành công']);
    }
    public function destroy(Permission $permission){
        $permission->delete();
        return response()->json(['success'=>true,'message'=>'Xóa quyền lợi thành công']);
    }
    public function deletePermissions(Request $request){
        $permissions = $request->perms;
        Permission::whereIn('id',$permissions)->delete();
        return response()->json(['success'=>true,'message'=>'Xóa những quyền lợi đã chọn thành công']);
    }
}
