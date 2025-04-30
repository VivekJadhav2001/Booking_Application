import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';

function AllHotels() {

  const location = useLocation();

  console.log(location );

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date[0]);
  const [options, setOptions] = useState(location.state.options);


  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-[20px]">
        <div className="listWrapper mx-3.5 w-full w-max-[1024px] flex gap-[20px]">
          <div className="listSearch sticky p-[10px] rounded-lg flex-1 bg-[#febb02]">
            <h1 className='text-lg text-[#555] mb-[10px]'>Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input placeholder={destination} className='bg-white outline-none rounded-lg ml-2 text-black pl-[10px] ' type="text" />
            </div>
            <div className="lsItem mt-[15px]">
              <label >Check-in Dates</label>
              <span>{`${format(date.startDate, "MM/dd/yyyy")} to ${format(date.endDate, "MM/dd/yyyy")}`}</span>

            </div>
          </div>
          <div className="listResult flex-3"></div>
        </div>
      </div>
    </div>
  )
}

export default AllHotels