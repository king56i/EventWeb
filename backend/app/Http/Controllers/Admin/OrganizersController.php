<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrganizersResource;
use App\Models\Organizers;
use Illuminate\Http\Request;

class OrganizersController extends Controller
{
    //
    public function index(){
        $organizers = Organizers::all();
        return OrganizersResource::collection($organizers);
    }
}
