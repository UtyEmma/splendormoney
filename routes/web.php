<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\LectureController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use App\Models\Enrollment;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PagesController::class, 'index'])->name('pages.home');
Route::get('/courses', [CourseController::class, 'index'])->name('courses.list');
Route::get('/courses/{course:slug}', [CourseController::class, 'show'])->name('courses.single');
Route::get('/cart', [PaymentController::class, 'cart'])->name('payment.cart');

Route::middleware(['auth'])->group(function(){
    Route::middleware(['role:user'])->group(function(){

        Route::prefix('dashboard')->group(function(){
            Route::get('/', [StudentController::class, 'dashboard'])->name('student.dashboard');
            
            Route::prefix('enrollment')->group(function(){
                Route::post('/initiate', [PaymentController::class, 'initiate'])->name('payment.initiate');
                Route::post('/complete', [EnrollmentController::class, 'store'])->name('payment.enroll');
                Route::post('/free', [EnrollmentController::class, 'enroll'])->name('payment.free');
            });
            
            Route::get('/courses', [EnrollmentController::class, 'index'])->name('student.courses');
            Route::get('/courses/{enrollment}/{course:slug}', [EnrollmentController::class, 'show'])->name('student.courses.single');
        });
    });

    Route::prefix('admin')->middleware(['role:admin'])->group(function(){
        Route::get('/', [AdminController::class, 'dashboard'])->name('admin.dashboard');

        Route::prefix('users')->group(function(){
            Route::get('/', [UserController::class, 'index'])->name('admin.users.list');
        });

        Route::prefix('instructors')->group(function(){
            Route::get('/', [InstructorController::class, 'list'])->name('admin.instructors.list');
            Route::get('/new', [InstructorController::class, 'create'])->name('admin.instructors.create');
            Route::post('/', [InstructorController::class, 'store'])->name('admin.instructors.store');
            Route::get('/{user}', [InstructorController::class, 'edit'])->name('admin.instructors.edit');
            Route::post('/{user}', [InstructorController::class, 'update'])->name('admin.instructors.update');
            Route::delete('/{user}', [InstructorController::class, 'destroy'])->name('admin.instructors.delete');
        });

        Route::prefix('courses')->group(function(){
            Route::get('/', [CourseController::class, 'list'])->name('admin.courses.list');
            Route::get('/new', [CourseController::class, 'create'])->name('admin.courses.create');
            Route::post('/', [CourseController::class, 'store'])->name('admin.courses.store');
            Route::get('/{course:slug}', [CourseController::class, 'edit'])->name('admin.courses.edit');
            Route::put('/{course}', [CourseController::class, 'update'])->name('admin.courses.update');
            Route::put('status/{course}', [CourseController::class, 'status'])->name('admin.courses.status');
            Route::delete('/{course}', [CourseController::class, 'destroy'])->name('admin.courses.delete');
        
            Route::prefix('/{course}/modules')->group(function(){
                Route::post('/', [ModuleController::class, 'store'])->name('admin.courses.modules.store');
                Route::put('/{module}', [ModuleController::class, 'update'])->name('admin.courses.modules.update');
                Route::delete('/{module}', [ModuleController::class, 'destroy'])->name('admin.courses.modules.delete');
                
                Route::prefix('/{module}/lecture')->group(function(){
                    Route::post('/', [LectureController::class, 'store'])->name('admin.courses.modules.lecture.store');
                    Route::put('/{lecture}', [LectureController::class, 'update'])->name('admin.courses.modules.lecture.update');
                    Route::delete('/{lecture}', [LectureController::class, 'destroy'])->name('admin.courses.modules.lecture.delete');
                });
            }); 
        });

        Route::prefix('transactions')->group(function(){
            Route::get('/', [TransactionController::class, 'index'])->name('admin.transactions.list');
        });
        Route::get('settings', [SiteController::class, 'index'])->name('admin.settings');
        Route::get('profile', [AdminController::class, 'show'])->name('admin.profile');




    });
});

require __DIR__.'/auth.php';
