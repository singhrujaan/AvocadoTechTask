import React from 'react'

const PostComponent = ({item,api}) => {
  return (
    <div className={`my-5 rounded-md ${(api==="rtk")?"bg-slate-200":"bg-red-200"}`}>
        <div><span className='font-semibold mx-5'>Title:</span><span className='font-semibold'>{item.title}</span></div>
        <div><span className='font-semibold mx-5'>Body:</span><span>{item.body}</span></div>
        {/* <button onClick={()}>delete</button> */}
    </div>
  )
}

export default PostComponent