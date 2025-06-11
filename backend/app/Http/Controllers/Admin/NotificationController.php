<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationsResource;
use App\Models\Notifications;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    //
    public function index(){
        $users = Notifications::with(['event','user'])->get();
        return NotificationsResource::collection($users);
    }
    public function destroy(Notifications $notification){
        $notification->delete();
        return response()->json(['success'=>true,'message'=>'Xóa thông báo thành công']);
    }
    public function deleteUsers(Request $request){
        $notifications = $request->notifications;
        Notifications::whereIn('id',$notifications)->delete();
        return response()->json(['success'=>true,'message'=>'Xóa những thông báo đã chọn thành công']);
    }
}
