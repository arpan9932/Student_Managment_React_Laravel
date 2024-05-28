<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'students'=>Student::get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Student::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'age'=>$request->age,
            'address'=>$request->address,
        ]);
        return response()->json('successfully created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }
       /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(Student::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $student = Student::whereId($id)->first();

        $student->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'age'=>$request->age,
            'address'=>$request->address,
        ]);
        return response()->json('success');
    }
    /**
     * Remove the specified resource from storage.
     *  @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Student::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
