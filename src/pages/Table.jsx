import React from 'react'
import {
    Link,
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { delTable } from '../services/TableSlice'
import Navbar from './Navbar';

const Table = () => {
    const dispatch= useDispatch();
   const state =  useSelector((state)=>state.tables);



  return (
    <>
      <Navbar/>
    <div className='border-2 flex justify-center my-12 mx-40'>

        {state.table.map((item,index)=>{
            return(
                <div key={index} className="space-y-3">
                    <div className='mx-5 text-xl font-semibold'>Name: {item.Name}</div>
                    <div  className='mx-5 text-xl font-semibold'>Capacity: {item.Capacity}</div>
                     <div  className='mx-5 text-xl font-semibold'>Layout: {item.Layout}</div>
                    <div  className='mx-5 text-xl font-semibold'>Status: {item.Status==true? "True" : "false"}</div>
                    <div className='space-x-5 mx-5'>
                    <span className='bg-green-500 rounded-sm text-white py-1 px-2 my-5'><Link to={`/tables/${item.id}`}>Update</Link></span>
                    <button className='bg-red-500 rounded-sm text-white py-1 px-2  my-5' onClick={()=>{dispatch(delTable(index))}}>Delete</button>
                    </div>
                 </div>   
            )
        })}
    </div>
    </>
  )
}

export default Table