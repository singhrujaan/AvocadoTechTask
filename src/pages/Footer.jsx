import React from 'react'

const Footer = () => {
    const footerList = [
        'Download','Tutorials','Privacy','Help','Advertise'
    ]
  return (
    <div className='mt-10 py-5 h-28'>
        <hr/>
        <div className='flex justify-center space-x-40 my-4'>
            <span className='logo font-bold italic'>LightShot</span>
            <div className='flex space-x-5'>
                {footerList.map((item,index)=>{
                    return(
                        <div key={index} className='text-blue-800'>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className='ml-20'>
                <span className='text-blue-800'>Skillbrains</span>
                <span> &copy; 2009-2022</span>
            </div>
        </div>
    </div>
  )
}

export default Footer