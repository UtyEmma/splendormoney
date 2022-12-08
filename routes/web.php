<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\LectureController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ReferralController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WishlistController;
use Illuminate\Support\Facades\Route;

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
Route::get('/about', [PagesController::class, 'about'])->name('pages.about');
Route::get('/courses', [CourseController::class, 'index'])->name('courses.list');
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.list');
Route::get('/courses/{course:slug}', [CourseController::class, 'show'])->name('courses.single');
Route::get('/cart', [PaymentController::class, 'cart'])->name('payment.cart');
Route::get('/faqs', [FaqController::class, 'index'])->name('pages.faq');
Route::get('/terms', [PagesController::class, 'terms'])->name('pages.terms');
Route::get('/privacy', [PagesController::class, 'privacy'])->name('pages.privacy');


Route::middleware(['auth'])->group(function(){
    Route::get('/uploads', MediaController::class)->name('media.file');

    Route::middleware(['role:user'])->group(function(){
        Route::prefix('dashboard')->group(function(){
            Route::get('/', [StudentController::class, 'dashboard'])->name('student.dashboard');
            
            Route::prefix('enrollment')->group(function(){
                Route::post('/initiate', [PaymentController::class, 'initiate'])->name('payment.initiate');
                Route::post('/complete', [EnrollmentController::class, 'store'])->name('payment.enroll');
                Route::post('/free', [EnrollmentController::class, 'enroll'])->name('payment.free');
            });
            
            Route::get('/courses', [EnrollmentController::class, 'index'])->name('student.courses');
            Route::get('/courses/{enrollment}/{course:slug}/{lecture?}', [EnrollmentController::class, 'show'])->name('student.courses.single');
            
            Route::prefix('profile')->group(function(){
                Route::get('/', [StudentController::class, 'profile'])->name('student.profile');
                Route::post('/{user}', [StudentController::class, 'update'])->name('student.profile.update');
            });

            Route::prefix('reviews')->group(function(){
                Route::post('/{course}', [ReviewController::class, 'store'])->name('reviews.store');
                Route::put('/{review}', [ReviewController::class, 'update'])->name('reviews.update');
                Route::get('/student', [StudentController::class, 'reviews'])->name('student.reviews');
            });

            Route::prefix('wishlist')->group(function(){
                Route::get('/', [WishlistController::class, 'index'])->name('student.wishlist');
                Route::get('/{course}', [WishlistController::class, 'update'])->name('student.wishlist.toggle');
            });

            Route::prefix('referrals')->group(function(){
                Route::get('/', [ReferralController::class, 'index'])->name('student.referrals');
            });

            Route::get('/transactions', [TransactionController::class, 'list'])->name('student.transactions');
        });

        Route::prefix('lecture')->group(function(){
            Route::get('{enrollment}/{lecture}', [LectureController::class, 'load'])->name('lecture.load');
        });
    });

    Route::prefix('admin')->middleware(['role:admin|superadmin'])->group(function(){
        Route::get('/', [AdminController::class, 'dashboard'])->name('admin.dashboard');

        Route::prefix('admins')->group(function(){
            Route::get('/', [AdminController::class, 'index'])->name('admin.admins');
            Route::get('/new', [AdminController::class, 'create'])->name('admin.admins.create');
            Route::post('/', [AdminController::class, 'store'])->name('admin.admins.store');
            Route::get('/{user?}', [AdminController::class, 'edit'])->name('admin.admins.edit');
            Route::post('/{user}', [AdminController::class, 'update'])->name('admin.admins.update');
            Route::delete('/{user}', [AdminController::class, 'destroy'])->name('admin.admins.delete');
        });

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
            Route::delete('/{transaction}', [TransactionController::class, 'destroy'])->name('admin.transactions.delete');
        });

        Route::prefix('settings')->group(function(){
            Route::get('/', [SiteController::class, 'index'])->name('admin.settings');
            Route::post('/{setting}', [SiteController::class, 'update'])->name('admin.settings.update');
        });

        Route::prefix('profile')->group(function(){
            Route::get('/', [AdminController::class, 'show'])->name('admin.profile');
            Route::post('/{user}', [AdminController::class, 'update'])->name('admin.profile.update');
        });

        Route::prefix('reviews')->group(function(){
            Route::get('/', [ReviewController::class, 'index'])->name('admin.reviews');
            Route::delete('/{review}', [ReviewController::class, 'destroy'])->name('admin.reviews.delete');
        });

        Route::prefix('testimonials')->group(function(){
            Route::get('/', [TestimonialController::class, 'list'])->name('admin.testimonials');
            Route::get('/new', [TestimonialController::class, 'create'])->name('admin.testimonials.create');
            Route::post('/', [TestimonialController::class, 'store'])->name('admin.testimonials.store');
            Route::post('/{testimonial}', [TestimonialController::class, 'update'])->name('admin.testimonials.update');
            Route::get('/{testimonial}', [TestimonialController::class, 'create'])->name('admin.testimonials.edit');
            Route::delete('/{testimonial}', [TestimonialController::class, 'destroy'])->name('admin.testimonials.delete');
        });

        Route::prefix('faqs')->group(function(){
            Route::get('/', [FaqController::class, 'list'])->name('admin.faq');
            Route::post('/{faq?}', [FaqController::class, 'store'])->name('admin.faq.update');
            Route::delete('/{faq}', [FaqController::class, 'destroy'])->name('admin.faq.delete');
        });

        Route::prefix('categories')->group(function(){
            Route::get('/', [CategoryController::class, 'list'])->name('admin.categories');
            Route::get('/edit/{category?}', [CategoryController::class, 'edit'])->name('admin.category.edit');
            Route::post('/{category?}', [CategoryController::class, 'update'])->name('admin.category.update');
            Route::delete('/{category}', [CategoryController::class, 'destroy'])->name('admin.category.delete');
        });
    });

    Route::prefix('instructor')->middleware(['role:instructor'])->group(function(){
        Route::get('/', [InstructorController::class, 'index'])->name('instructor.dashboard');
        Route::get('/courses', [InstructorController::class, 'courses'])->name('instructor.courses');
        Route::get('/students', [InstructorController::class, 'students'])->name('instructor.students');

        Route::prefix('reviews')->group(function(){
            Route::get('/', [InstructorController::class, 'reviews'])->name('instructor.reviews');
            Route::delete('/{review}', [ReviewController::class, 'destroy'])->name('instructor.reviews.delete');
        });

        Route::prefix('profile')->group(function(){
            Route::get('/', [InstructorController::class, 'profile'])->name('instructor.profile');
            Route::post('/{user}', [InstructorController::class, 'update'])->name('instructor.profile.update');
        });
    });
    
});

require __DIR__.'/auth.php';
