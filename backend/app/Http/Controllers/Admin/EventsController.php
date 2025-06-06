<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventRequest;
use App\Models\Events;
use Illuminate\Http\Request;
use App\Http\Resources\EventsResource;
use App\Http\Resources\OrganizersResource;
use App\Models\Organizers;

class EventsController extends Controller
{
    //
    public function index(){
        $events = Events::with(['organizer'])->get();
        return EventsResource::collection($events);
    }
    public function create(){
    }
    public function store (EventRequest $eventRequest){
        $data =  $eventRequest->validated();
        Events::create($data);
        return response()->json(['success'=>true,'message'=>'Thêm sự kiện thành công']);
    }
    public function edit(Events $event){
        $event->load('organizer');
        return new EventsResource($event);
    }
    public function update(Events $event,EventRequest $eventRequest){
        $data = $eventRequest->validated();
        $event->update($data);
        return response()->json(['success'=>true,'message'=>'Sửa sự kiện thành công']);

    }
    public function destroy(Events $event){
        $event->delete();
        return response()->json(['success'=>true,'message'=>'Xóa sự kiện thành công']);
    }
    public function trashcan(){
        $events = Events::with(['organizer'])->onlyTrashed()->get();
        return EventsResource::collection($events);
    }
    public function restore( $id){
        $event = Events::withTrashed()->find($id);
        if (!$event->trashed()) {
            return response()->json(['success' => false, 'message' => 'Sự kiện chưa bị xóa'], 400);
        }
        $event->restore();
        return response()->json(['success'=>true,'message'=>'Phục hồi sự kiện thành công']);

    }
    public function forceDelete( $id){
        $event = Events::withTrashed()->find($id);
        $event->forceDelete();
        return response()->json(['success'=>true,'message'=>'Xóa vĩnh viễn sự kiện thành công']);
    }
    public function deleteEvents(Request $request){
        $events = $request->events;
        Events::whereIn('id',$events)->delete();
        return response()->json(['success'=>true,'message'=>'Xóa những sự kiện đã chọn thành công']);
    }
    public function deleteForeverEvents(Request $request){
        $events = $request->events;
        Events::whereIn('id',$events)->forceDelete();
        return response()->json(['success'=>true,'message'=>'Xóa vv những sự kiện đã chọn thành công']);
    }
    public function restoreEvents(Request $request){
        $events = $request->events;
        Events::whereIn('id',$events)->restore();
        return response()->json(['success'=>true,'message'=>'Phục hồi những sự kiện đã chọn thành công']);
    }

}
