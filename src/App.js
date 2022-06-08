import React,{useState,useEffect} from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import AllPosts from "./pages/AllPosts";
import AllPost from "./pages/AllPost";


function App() {
  const [rtk, setRtk] = useState(false)
  const [thunk, setThunk] = useState(false)
  return (
    <div className="App bg-gray-300 h-auto">
      <Navbar/>
      <h1>Hello world</h1>
      <Home/>
      <span className="font-semibold mx-6">Quesno. 2</span>
      <button className="font-semibold bg-slate-200 rounded-sm px-3 py-2 mx-2" onClick={()=>setRtk(!rtk)}>Api fetch using RTK query</button>
      <button className="font-semibold bg-red-200 rounded-sm px-3 py-2 mx-2" onClick={()=>setThunk(!thunk)}>Api fetch using Redux Thunk </button>
      <div className="flex my-5">
       {rtk && <AllPosts/>} 
       {thunk && <AllPost/>} 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
