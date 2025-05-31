<?php

namespace Database\Seeders;

use App\Models\Organizers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrganizersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $organizers = [
            [
                'id' => 1,
                'name' => 'Công ty Công nghệ Việt',
                'contact_info' => 'SĐT: 0901234567, Email: contact@techviet.vn',
                'description' => 'Chuyên tổ chức hội thảo, triển lãm công nghệ trong và ngoài nước.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'name' => 'Live Nation Vietnam',
                'contact_info' => 'SĐT: 0987654321, Email: support@livenation.vn',
                'description' => 'Đơn vị tổ chức các sự kiện âm nhạc và giải trí quy mô lớn.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'name' => 'Trung tâm Hỗ trợ Sinh viên',
                'contact_info' => 'Email: sinhvien@support.vn, Hotline: 19001234',
                'description' => 'Tổ chức các hoạt động hướng nghiệp, hỗ trợ học tập cho sinh viên.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 4,
                'name' => 'Green Travel Forum',
                'contact_info' => 'Email: green@travel.vn, Hotline: 0909988776',
                'description' => 'Diễn đàn chuyên tổ chức hội nghị, hội thảo về du lịch bền vững.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 5,
                'name' => 'Ẩm thực Việt Nam',
                'contact_info' => 'Email: amthuc@vn.vn, SĐT: 0911223344',
                'description' => 'Tổ chức lễ hội và sự kiện liên quan đến ẩm thực truyền thống và hiện đại.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($organizers as $organizer) {
            Organizers::create($organizer);
        }
    }
}
