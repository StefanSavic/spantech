<?php

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/gas-sensors', function () {

    return view('gas-sensors');
});
Route::get('/gas-sensors/{gas}', function () {
    return view('gas-sensor');
});
Route::get('/enquiry-basket', 'BasketController@index');
Route::post('/enquiry-basket', 'BasketController@store' );

Route::get('/calibration-instruments', function () {
    return view('gas-instruments');
});

Route::get('/rare-gas-purifier',function (){
    return view('gas-purifires');
});
Route::get('/calibration-gas',function (){
    return view('calibration-gas');
});
Route::get('/about',function (){
    return view('about');
    
});

