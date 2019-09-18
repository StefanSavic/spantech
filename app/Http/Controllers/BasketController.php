<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Mail\BasketEmail;

class BasketController extends Controller
{
    public function index(Request $request)
    {
        return view('basket');
    }
    public function store(Request $request)
    {   
    //    dd('hello');

        // $data = request()->validate([

        //     'name'=> ['min:3','max:255'],

        //     'lastName'=> ['min:3','max:255'],
            
        //     'email'=> ['min:3','max:255'],
            
        //     'enquiry'=> ['min:3','max:255'],
        


        // ]);

        // dump($data);
        
        $data = $request->all();
        // dump(json_decode($sensors,true));
        // dump($data);
        
        \Mail::to('stevjah11@gmail.com')->send(new BasketEmail($data));
    }
}
