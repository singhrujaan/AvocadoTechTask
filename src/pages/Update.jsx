import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTable } from '../services/TableSlice'
import Navbar from "./Navbar";

const Update = () => {
  const { id } = useParams();
//   console.log(id,"id")
  const state =  useSelector((state)=>state.tables);
  const navigate = useNavigate();
  const exist = state.table.find((item)=>item.id==id)
  const {Name, Capacity} = exist
  const [updateName, setUpdateName] = useState(Name)
  const [updateCapacity, setUpdateCapacity] = useState(Capacity)
  const dispatch = useDispatch();


  

  const handleUpdate= (id)=>{
    dispatch(updateTable({id,updateName,updateCapacity}))
    navigate('/tables')
  }
  return (
    <>
    <Navbar/>
  <div className="bg-gray-300 h-screen flex items-center justify-center">
    <div className=" bg-white  flex flex-col items-center px-16 py-12">
     <span className="text-2xl font-semibold">Update Your Info:</span>
    <div className="space-x-5 mt-20">
     <label className="text-xl font-semibold">Name:</label> <input className="h-8 px-3 border-2 bg-slate-100" placeholder="update Name" value={updateName} onChange={(e)=>setUpdateName(e.target.value)}/>
     <label className="text-xl font-semibold">Capacity:</label>  <input className="h-8 px-3 border-2 bg-slate-100" placeholder="update Capacity" value={updateCapacity} onChange={(e)=>setUpdateCapacity(e.target.value)}/>

    </div>
      <div className="mt-10"><button className="bg-green-500 py-1 px-2 text-white rounded-sm hover:bg-green-600" onClick={()=>{handleUpdate(id)}}>Update Info</button></div>
   </div>
   </div>
   </>
  )
};

export default Update;
