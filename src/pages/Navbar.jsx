import React from 'react'
import twitter from "../assets/twitter.png"
import fb from "../assets/fb.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-black py-2 text-white flex justify-around">
        <div className="section1 flex">
          <div className="logo text-slate-300 mr-10">
            <Link to="/"><div className="font-bold">LightShot</div></Link>
            <div className='text-xs'>screen capture tool</div>
          </div>
          <div className="flex space-x-16  items-center text-sm">
            <button className="sign hover:cursor-pointer text-xs">English</button>
            <button className="sign hover:cursor-pointer text-xs">Sign in</button>
          </div>
        </div>
        <div className="section2 flex space-x-10">
        <div className="social flex space-x-3 items-center">
          <div className=''><img src="https://st.prntscr.com/2022/05/15/0209/img/icon-twitter_gscale.png" alt='twitter'/></div>
          <div className=''><img src="https://st.prntscr.com/2022/05/15/0209/img/icon-facebook_gscale.png" alt='facebook'/></div>
        </div>
        <button className="download bg-blue-900 my-1 px-2 rounded-md text-sm flex  items-center font-semibold">Download Lightshot for free</button>
      </div>
        </div>
  )
}

export default Navbar