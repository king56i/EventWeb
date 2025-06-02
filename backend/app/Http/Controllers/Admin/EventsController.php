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
        $organizers = Organizers::all();
        return OrganizersResource::collection($organizers);
    }
    public function store (EventRequest $eventRequest){
        $data =  $eventRequest->validated();
        Events::create($data);
    }
    public function edit(Events $event){
        $event->load('organizer');
        return new EventsResource($event);
    }
    public function update(Events $event,EventRequest $eventRequest){
        $data = $eventRequest->validated();
        $event->update($data);
    }
    public function destroy(Events $event){
        $event->delete();
    }
    public function trashcan(){
        $events = Events::with(['organizer'])->onlyTrashed()->get();
        return EventsResource::collection($events);
    }
}
