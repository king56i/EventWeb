<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Events;
use Illuminate\Http\Request;
use App\Http\Resources\EventsResource;
class EventsController extends Controller
{
    //
    public function index(){
            $events = Events::with(['organizer'])->get();
            return EventsResource::collection($events);
    }
}
