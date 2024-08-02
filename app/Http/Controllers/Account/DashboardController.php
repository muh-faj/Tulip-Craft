<?php

namespace App\Http\Controllers\Account;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function __invoke(Request $request): Response
    {
        // Count transactions
        $unpaid = Transaction::where('status', 'UNPAID')->count();
        $paid = Transaction::where('status', 'PAID')->count();
        $expired = Transaction::where('status', 'EXPIRED')->count();
        $cancelled = Transaction::where('status', 'CANCELLED')->count();

        // Current year
        $year = date('Y');

        // Fetch chart data
        $transactions = DB::table('transactions')
            ->select(
                DB::raw('SUM(grand_total) as grand_total'),
                DB::raw('MONTH(created_at) as month'),
                DB::raw('MONTHNAME(created_at) as month_name'),
                DB::raw('YEAR(created_at) as year')
            )
            ->whereYear('created_at', $year)
            ->where('status', 'PAID')
            ->groupBy('month', 'month_name', 'year')
            ->orderBy('month', 'ASC')
            ->get();

        // Prepare arrays for chart data
        $month_names = [];
        $grand_totals = [];

        foreach ($transactions as $transaction) {
            $month_names[] = $transaction->month_name;
            $grand_totals[] = (int) $transaction->grand_total;
        }

        // Return view with data
        return Inertia::render('Account/Dashboard/Index', [
            'count' => [
                'unpaid' => $unpaid,
                'paid' => $paid,
                'expired' => $expired,
                'cancelled' => $cancelled,
            ],
            'chart' => [
                'month_names' => $month_names,
                'grand_totals' => $grand_totals,
            ],
        ]);

        // dd('hello');
        // return Inertia::render('Account/Test/Index');
    }
}
