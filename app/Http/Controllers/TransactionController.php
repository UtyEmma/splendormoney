<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller {
    
    function index(Request $request){
        $transactions = Transaction::with(['user'])->paginate(env('PAGINATION_COUNT'));
        return Inertia::render('Admin/Transactions/Transactions', [
            'transactions' => $transactions
        ]);
    }

}
