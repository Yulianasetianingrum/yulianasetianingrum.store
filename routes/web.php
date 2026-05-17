<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function (\Illuminate\Http\Request $request) {
    // Determine Locale based on IP
    $locale = session('locale');
    
    if (!$locale) {
        $ip = $request->ip();
        // Fallback for local testing
        if ($ip === '127.0.0.1' || $ip === '::1') {
            $ip = '103.111.0.0'; // Dummy Indonesian IP
        }
        
        try {
            $response = \Illuminate\Support\Facades\Http::timeout(3)->get("http://ip-api.com/json/{$ip}");
            $countryCode = $response->json('countryCode');
            $locale = ($countryCode === 'ID') ? 'id' : 'en';
        } catch (\Exception $e) {
            $locale = 'en'; // Default to English on failure
        }
        
        session(['locale' => $locale]);
    }

    return Inertia::render('Welcome', [
        'locale' => $locale,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
