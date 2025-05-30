<?php

use App\Models\Organizers;
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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string("title",50);
            $table->text("description");
            $table->datetime("start_date");
            $table->datetime("end_date");
            $table->string("location",255);
            $table->foreignIdFor(Organizers::class)->constrained()->onDelete("cascade");
            $table->enum("status",["draft","published","cancelled"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
