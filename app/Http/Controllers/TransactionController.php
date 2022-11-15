<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
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

    function destroy(Transaction $transaction){
        $transaction->delete();
        return back()->with('success', "Transaction Deleted");
    }

}
