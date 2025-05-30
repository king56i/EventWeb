<?php

use App\Models\Orders;
use App\Models\Tickets;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('attendees', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Orders::class)->constrained()->onDelete("cascade");
            $table->foreignIdFor(User::class)->constrained()->onDelete("cascade");
            $table->string("full_name",255);
            $table->string("email",255);
            $table->foreignIdFor(Tickets::class)->constrained()->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendees');
    }
};
