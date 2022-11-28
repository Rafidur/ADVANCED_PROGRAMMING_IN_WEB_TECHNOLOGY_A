<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    function index()
    {
        $countries = Country::all();
        if($countries->count() > 0)
        {
            return response()->json(["countries"=>$countries,"text-css"=>"text-success"], 200);
        }
        else
        {
            return response()->json(['message' => 'No countries found',"text-css"=>"text-danger"], 404);
        }
    }

    function show(Request $id)
    {
        $tempCountry = Country::find($id->id);
        if($tempCountry->count() > 0 )
        {
            return response()->json(["country"=>$tempCountry,"text-css"=>"text-success"], 200);
        }
        else
        {
            return response()->json(['message' => 'No country found',"text-css"=>"text-danger"], 404);
        }
    }

    function store(Request $request)
    {
        $tempCountry = new Country();
        $tempCountry->name = $request->name;
        $tempCountry->code = $request->code;
        $tempCountry->total_population = $request->population;
        if($tempCountry->save())
        {
            return response()->json(['message' => 'Country created successfully',"text-css"=>"text-success"], 201);
        }
        else
        {
            return response()->json(['message' => 'Country not created',"text-css"=>"text-danger"], 500);
        }
    }
}
