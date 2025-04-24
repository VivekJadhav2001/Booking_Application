import React from 'react'

function Hero() {
  return (
    <div className='hero h-[500px] bg-[#476A9D] flex justify-center'>
      <div className="heroContainer w-full max-w-[1350px] flex items-center text-white">
        <div className="heroText flex flex-col items-start text-left gap-4">
          <h1 className='text-5xl font-bold'>Search hotels in Hyderabad</h1>
          <p className='text-lg'>Enter your dates to see the latest prices and deals for Hyderabad hotels</p>
          <button className='px-4 py-3 bg-white text-base hover:bg-[#F0F6FD] text-[#003B95] font-medium rounded-lg transition duration-200 cursor-pointer'>Sign in & unlock savings</button>
        </div>
        <div></div>
      </div>

    </div>
  )
}

export default Hero