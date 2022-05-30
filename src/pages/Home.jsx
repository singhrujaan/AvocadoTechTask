import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAddPostMutation } from "../services/postsApi";
import { addTable } from "../services/TableSlice";
import {  useNavigate } from "react-router-dom";

const Home = () => {
  const[name,setName] =useState('')
  const[capacity,setCapacity] =useState('')
  const[status,setStatus] =useState(false)
  const[layout,setLayout] =useState("")

  const dispatch = useDispatch()
  let navigate = useNavigate()
  

  const handleAdd =  (e) => {
    if(name=="" || capacity==""){
      alert("enter the required fields")
      e.preventDefault();
    }
    console.log(status,"check",layout,"layout")
    dispatch(addTable({id:Date.now(),Name:name,Capacity:capacity,Layout:layout,Status:status}))
    navigate('/tables')
  };


  return (
    <div className="bg-white mx-32 my-10 py-5 shadow-xl">
      <h2 className="flex ml-9 pb-3 my-2 font-semibold ">Create Table</h2>
      <hr />
      <div className="my-5 pr-56 space-y-8">
        <div className="space-x-8">
          <label className="">Layout:</label>
          <select name="layout" onChange={(e)=>setLayout(e.target.value)} className="border-2 rounded-md w-96 py-1">
            <option value="select">Select Layout</option>
            <option value="layout1">Layout1</option>
            <option value="layout2">Layout2</option>
            <option value="layout3">Layout3</option>
          </select>
        </div>
        <div className="space-x-8">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border-2 rounded-md w-96 py-1"
          />
        </div>
        <div>
          <label className="mr-5">Capacity:</label>
          <input
            type="text"
          name="capacity"
            placeholder="Enter capacity"
            className="border-2 rounded-md w-96 py-1"
            value={capacity}
            onChange={(e)=>setCapacity(e.target.value)}
          />
        </div>
        <div className="space-x-8 -ml-80">
          <label className="-ml-10">Status:</label>
          <input type="checkbox" onChange={(e)=>setStatus(e.target.checked)} className="border-2 rounded-md" />
        </div>
        <div className="space-x-1">
          <button
            className="bg-slate-900 px-3 py-2 rounded-md text-white"
            onClick={(e)=>handleAdd()}
          >
            Create Table
          </button>
          <button className="bg-red-600 px-3 text-white rounded-md py-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
