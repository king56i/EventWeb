<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'receiver' => new UsersResource($this->whenLoaded('user')),
            'event' => new EventsResource($this->whenLoaded('event')),
            'message' => $this->message,
            'type' => $this->type,
        ];
    }
}
