import React from 'react'
import practiceimg from "../assets/home-image.png"
import { Link } from 'react-router-dom'


const home = () => {
  return (
    <>
      <div className='bg-[url(./assets/bgimg3.jpg)] bg-cover bg-center flex justify-between p-7 items-center'>
       
          <div className="left">
          <Link to='/'>
            <img className='' src={practiceimg} alt="" />
            </Link>
          </div>
        
        <div className=" right">
          <span className='main-heading'>CodeQuest New Learing Plateform</span>
          <p className='my-1.5 text-2xl text-center'>Sharpen Your Coding Skills with AI!"</p>
          <p className='my-1.5 text-2xl text-center'>strengthen You Topics & Learn New Concepts</p>

          <Link to='/signin'>

            <button className='hover:cursor-pointer hover:animate-none animate-pulse mt-9 py-[6px] px-[10px] bg-white text-black rounded-sm m-auto block'>Get Started &#8594;</button>
          </Link>

        </div>

      </div>
    </>
  )
}

export default home