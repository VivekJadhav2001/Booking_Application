import React from 'react'
import { Link } from 'react-router-dom'

function SearchItem({item}) {
  return (
    <div className="searchContainer">

      <div className="searchItem flex justify-between bg-white p-[20px] rounded-lg mb-[20px]">
        <img src={item.photos[0]} alt="" className='w-[200px] h-[200px] rounded-lg cursor-pointer' />
        <div className="searchDetails flex-1 px-[20px]">
          <h1 className="text-2xl font-bold text-[#2062b7]">{item.name}</h1>
          <span className="text-[#555] text-sm">{item.distance}m from center</span>
          <p className="text-[#555] text-sm mt-[10px]">{item.desc}</p>
        </div>
        <div className="details flex flex-col justify-between items-end">
          {item.rating && 
          <div className="rating flex justify-between items-center gap-2.5 mt-2">
          <h2 className="font-bold text-lg">Excellent</h2>
          <span className='h-[30px] w-[30px] flex justify-center items-center rounded-lg bg-[#003B95]'><h2 className='text-lg text-white font-medium'>{item.rating}</h2></span>
        </div>
          }
          <div className="priceDetails flex flex-col justify-end items-end mt-1">
          <span className="">₹{item.cheapestPrice}</span>
            <span className="text-gray-500 font-medium">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="w-full bg-[#003B95] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#003B95]/80 mt-3">See Availability</button>
          </Link>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default SearchItem