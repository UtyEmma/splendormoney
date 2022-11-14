<?php

namespace App\Http\Services;

use App\Library\Token;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Transaction;
use App\Models\User;

class EnrollmentService {

    static function create(Transaction $transaction, Course $course){
        Enrollment::create([
            'course_id' => $course->id,
            "student_id" => $transaction->user_id,
            "transaction_id" => $transaction->transaction_id
        ]);
    }

    static function createMany(User $user, array $courses, $transaction_id = null){
        $enrollments = array_map(function($course) use($transaction_id, $user){
            return [
                'id' => Token::uuid('enrollments', 'id'),
                "course_id" => $course['id'],
                "student_id" => $user->id,
                "transaction_id" => $transaction_id,
                'status' => 'active'
            ]; 
        }, $courses);

        Enrollment::insert($enrollments);
    }

}