<?php

use App\Http\Controllers\AllUserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__ . '/auth.php';






Route::get('/users', [AllUserController::class, 'getallusers'])
    ->middleware('auth:sanctum');


Route::post('/users', [AllUserController::class, 'adduser'])
    ->middleware('auth:sanctum');