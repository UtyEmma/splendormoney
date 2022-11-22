<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller {
    
    function index(Request $request){
        $transactions = Transaction::with(['user']);

        $transactions->when($request->search, function($query, $keyword){
            $query->where('reference', $keyword)->orWhereRelation('user', 'name', $keyword);
        });

        return Inertia::render('Admin/Transactions/Transactions', [
            'transactions' => $transactions->paginate(env('PAGINATION_COUNT'))
        ]);
    }

    function list(Request $request){
        $user_id = auth()->id();
        $transactions = User::with(['transactions'])->find($user_id);
        
        return Inertia::render('Student/Transactions', [
            'transactions' => $transactions
        ]);
    }

    function destroy(Transaction $transaction){
        $transaction->delete();
        return back()->with('success', "Transaction Deleted");
    }

}
