<?php

namespace App\Http\Services;

use App\Library\Number;
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

    static function createMany(User $user, array $courses, $transaction = null){
        $referrer = $user->referrer ? User::where('affiliate_id', $user->referrer)->first() : null;
        
        $enrollments = array_map(function($course) use($transaction, $user, $referrer) {
            return [
                'id' => Token::uuid('enrollments', 'id'),
                "course_id" => $course['id'],
                "student_id" => $user->id,
                "transaction_id" => $transaction ? $transaction->id : null,
                'status' => 'active',
                'referrer_id' => $referrer,
                'amount' => Number::percentageDifference($course['discount'], $course['price'])
            ]; 
        }, $courses);

        Enrollment::insert($enrollments);
    }

}