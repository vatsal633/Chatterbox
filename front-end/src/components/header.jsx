import React from 'react'
import practiceimg from "../assets/home-image.png"
const header = () => {
  return (
    <>
      <div className='bg-[url(./assets/bgimg3.jpg)] bg-cover bg-center flex justify-between p-7 items-center'>
        <div className="left">
          <img className='' src={practiceimg} alt="" />
        </div>
        <div className=" right">
          <span className='main-heading'>CodeQuest New Learing Plateform</span>
          <p className='my-1.5 text-2xl text-center'>Sharpen Your Coding Skills with AI!"</p>
          <p className='my-1.5 text-2xl text-center'>Strenghen You Topics & Learn New Concepts</p>

          <button className='hover:cursor-pointer hover:animate-none animate-pulse mt-9 py-[6px] px-[10px] bg-white text-black rounded-sm m-auto block'>Get Started &#8594;</button>

        </div>

      </div>
    </>
  )
}

export default header