<?php

namespace Database\Seeders;

use App\Library\Str;
use App\Library\Token;
use App\Models\Faq;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faqs = [
            [
                'id' => Token::uuid('faqs'),
                'question' => 'How can I register on Splendormoneyschool?',
                'answer' => 'To register you either visit www.splendormoneyschool.com or click on your referrer’s link to access our homepage and click the “get started’ icon',
                'status' => true
            ],
            [
                'id' => Token::uuid('faqs'),
                'question' => 'Where will the classes take place?',
                'answer' => 'There are no fixed platforms for which the classes are to take place. The venue for each class is mentor-specific. What this means is that the platform for receiving a class is predetermined by the mentor. Some of these platforms include Google Classroom, Google Meet, Edmodo, Zoom etc',
                'status' => true
            ],
            [
                'id' => Token::uuid('faqs'),
                'question' => 'Where will the classes take place?',
                'answer' => 'There are no fixed platforms for which the classes are to take place. The venue for each class is mentor-specific. What this means is that the platform for receiving a class is predetermined by the mentor. Some of these platforms include Google Classroom, Google Meet, Edmodo, Zoom etc',
                'status' => true
            ],
        ];

        Faq::insertMany($faqs);
    }
}
