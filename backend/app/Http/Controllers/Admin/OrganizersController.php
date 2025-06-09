<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrganizerRequest;
use App\Http\Resources\OrganizersResource;
use App\Models\Organizers;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class OrganizersController extends Controller implements HasMiddleware
{
    //
    public static function middleware()
    {
        return [
            new Middleware('permission:create organizer',only:['store','create']),
            new Middleware('permission:delete organizer',only:['destroy','deleteOrganizers']),
            new Middleware('permission:update organizer',only:['update','edit']),
            new Middleware('permission:view organizer',only:['index']),
        ];
    }
    public function index(){
        $organizers = Organizers::all();
        return OrganizersResource::collection($organizers);
    }
    public function store(OrganizerRequest $organizerRequest){
        $data = $organizerRequest->validated();
        Organizers::create($data);
        return response()->json(['success'=>true,'message'=>'Thêm tổ chức thành công']);
    }
    public function edit(Organizers $organizer){
        return new OrganizersResource($organizer);
    }
    public function update(Organizers $organizer, OrganizerRequest $organizerRequest){
        $data = $organizerRequest->validated();
        $organizer->update($data);
        return response()->json(['success'=>true,'message'=>'Sửa tổ chức thành công']);
    }
    public function destroy(Organizers $organizer){
        $organizer->delete();
        return response()->json(['success'=>true,'message'=>'Xóa tổ chức thành công']);
    }
    public function deleteOrganizers(Request $request){
        $organizers = $request->organizers;
        Organizers::whereIn('id',$organizers)->delete();
        return response()->json(['success'=>true,'message'=>'Xóa những tổ chức đã chọn thành công']);
    }
}
