import React from 'react'
import practiceimg from "../assets/home-image.png"
import { Link } from 'react-router-dom'
import RightImg from '../assets/code.jpg'

const home = () => {
  return (
    <>
      {/* hero section */}
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

      {/* demo profile */}
      <div className='items-center bg-white w-[88%] m-auto p-12 justify-center flex my-11 rounded-2xl'>

        {/* text part */}
        <div className='left p-4 w-full'>

          <div className='text-5xl text-blue-600 '>
            <span>
              Explore and expand your skills.
            </span>
          </div>

          <div className='my-5 text-gray-600 text-xl font-bold'>
            <p>
              Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers. Access the content you need to develop new skills – and land the job you’ve dreamed of.
            </p>
          </div>
          
          <div className="signin">
            <Link>
           <button type="button" className='bg-[#44d1d1]  rounded-sm  text-white py-[11px] px-[38px]  cursor-pointer'>Start Now</button>         
            </Link>
          </div>
        </div>

        {/* img part */}
        <div className="right ">
          <img src={RightImg} alt="" srcset="" />
        </div>
      </div>
      {/* demo profile end*/}
    </>
  )
}

export default home