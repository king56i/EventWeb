<?php

namespace Database\Seeders;

use App\Models\Events;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        {
        $events = [
            [
                'title' => 'Hội thảo Công nghệ 2025',
                'description' => 'Sự kiện giới thiệu các xu hướng công nghệ mới nhất trong năm 2025.',
                'start_date' => '2025-07-01 09:00:00',
                'end_date' => '2025-07-01 17:00:00',
                'location' => 'Trung tâm Hội nghị Quốc gia, Hà Nội',
                'organizers_id' => 1,
                'status' => 'published',
            ],
            [
                'title' => 'Live Concert Summer Beats',
                'description' => 'Đêm nhạc hội sôi động với sự góp mặt của nhiều nghệ sĩ nổi tiếng.',
                'start_date' => '2025-08-15 18:00:00',
                'end_date' => '2025-08-15 23:00:00',
                'location' => 'SVĐ Quân khu 7, TP.HCM',
                'organizers_id' => 1,
                'status' => 'published',
            ],
            [
                'title' => 'Triển lãm Mỹ thuật Quốc tế',
                'description' => 'Quy tụ các tác phẩm của nghệ sĩ từ hơn 20 quốc gia.',
                'start_date' => '2025-09-10 10:00:00',
                'end_date' => '2025-09-12 17:00:00',
                'location' => 'Bảo tàng Mỹ thuật, TP.HCM',
                'organizers_id' => 1,
                'status' => 'draft',
            ],
            [
                'title' => 'Ngày hội Việc làm 2025',
                'description' => 'Cơ hội giao lưu giữa sinh viên và các nhà tuyển dụng lớn.',
                'start_date' => '2025-06-20 08:30:00',
                'end_date' => '2025-06-20 16:30:00',
                'location' => 'ĐH Bách Khoa Hà Nội',
                'organizers_id' => 1,
                'status' => 'published',
            ],
            [
                'title' => 'Workshop Khởi nghiệp',
                'description' => 'Chia sẻ kinh nghiệm và gọi vốn thành công từ các startup.',
                'start_date' => '2025-07-05 09:00:00',
                'end_date' => '2025-07-05 12:00:00',
                'location' => 'Toong Co-working Space, Đà Nẵng',
                'organizers_id' => 1,
                'status' => 'draft',
            ],
            [
                'title' => 'Diễn đàn Du lịch Xanh',
                'description' => 'Thảo luận các giải pháp du lịch bền vững tại Việt Nam.',
                'start_date' => '2025-09-25 08:00:00',
                'end_date' => '2025-09-26 17:00:00',
                'location' => 'Khách sạn Rex, TP.HCM',
                'organizers_id' => 1,
                'status' => 'published',
            ],
            [
                'title' => 'Lễ hội Ẩm thực Đường phố',
                'description' => 'Hàng trăm gian hàng ẩm thực khắp cả nước tụ hội.',
                'start_date' => '2025-08-01 10:00:00',
                'end_date' => '2025-08-03 22:00:00',
                'location' => 'Công viên Lê Văn Tám, TP.HCM',
                'organizers_id' => 1,
                'status' => 'published',
            ],
            [
                'title' => 'Hội nghị An ninh mạng Việt Nam',
                'description' => 'Chia sẻ về an toàn thông tin và công nghệ bảo mật.',
                'start_date' => '2025-10-15 08:00:00',
                'end_date' => '2025-10-15 17:00:00',
                'location' => 'Khách sạn Melia, Hà Nội',
                'organizers_id' => 1,
                'status' => 'draft',
            ],
            [
                'title' => 'Talkshow: Kỹ năng mềm cho sinh viên',
                'description' => 'Trang bị kiến thức thực tiễn cho sinh viên trước khi ra trường.',
                'start_date' => '2025-06-10 14:00:00',
                'end_date' => '2025-06-10 17:00:00',
                'location' => 'ĐH Kinh tế Quốc dân',
                'organizers_id' => 1,
                'status' => 'published',
            ],
            [
                'title' => 'Hội chợ Sách 2025',
                'description' => 'Nơi hội tụ của độc giả và các nhà xuất bản trên toàn quốc.',
                'start_date' => '2025-11-01 09:00:00',
                'end_date' => '2025-11-05 18:00:00',
                'location' => 'Công viên Thống Nhất, Hà Nội',
                'organizers_id' => 1,
                'status' => 'cancelled',
            ],
        ];

        foreach ($events as $event) {
            Events::create($event);
        }
    }
    }
}
