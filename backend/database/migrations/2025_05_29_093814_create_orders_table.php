<?php

use App\Models\Events;
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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained()->onDelete("cascade");
            $table->foreignIdFor(Events::class)->constrained()->onDelete("cascade");
            $table->foreignIdFor(Tickets::class)->constrained()->onDelete("cascade");
            $table->bigInteger("quantity");
            $table->decimal("total_price",10,2);
            $table->enum("status",["pending","paid","cancelled"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
