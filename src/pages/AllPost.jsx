import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPosts } from '../services/PostsSlice'
import PostComponent from './PostComponent'

const AllPost = () => {
  const dispatch = useDispatch()
  const {items,status} = useSelector((state)=>state.posts)

    useEffect(() => {
      dispatch(getPosts()) 
    }, [])
    
  return (
    <div className='mx-5'>
      <h1 className='text-xl font-semibold my-8'>Api fetching using redux thunk </h1>
      {items && items.map((item,index)=>{
        return(
        <div key={index}>
          <PostComponent api={"thunk"} item={item}/>
          </div>
          
          )
      })}
    </div>
  )
}

export default AllPost