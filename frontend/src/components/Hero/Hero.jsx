import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Hero() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const dateRef = useRef();


  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });

  const handleOptions = (name, operation) => {
    setOptions(prev => {return{
      ...prev,[name]: operation === "i" ? options[name] + 1 : options[name] - 1
    }})
  }

  const optionsRef = useRef();
  // Close options on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOpenOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className='bg-[#003B95] text-white flex flex-col items-center px-4 py-12'>
      {/* Text Section */}
      <div className='max-w-6xl w-full text-center mb-8'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-4'>Search hotels in Hyderabad</h1>
        <p className='text-lg sm:text-xl mb-6'>
          Enter your dates to see the latest prices and deals for Hyderabad hotels
        </p>
        <button className='bg-white text-[#003B95] font-semibold px-5 py-3 rounded-lg hover:bg-[#F0F6FD] transition'>
          Sign in & unlock savings
        </button>
      </div>

      {/* Search Bar */}
      <div className='relative border-[3px] border-yellow-400 rounded-xl flex flex-col sm:flex-row w-full max-w-6xl overflow-hidden gap-[5px] bg-yellow-400'>
        {/* Location */}
        <div className='flex items-center gap-2 px-4 py-3 w-full sm:w-[30%] border-b sm:border-b-0 sm:border-r bg-white'>
          <FontAwesomeIcon icon={faBed} className='text-gray-500' />
          <input
            type="text"
            placeholder="Where are you going?"
            className='w-full outline-none text-sm text-black placeholder:text-black font-medium'
          />
        </div>

        {/* Date */}
        <div className='relative w-full sm:w-[30%] bg-white border-b sm:border-b-0 sm:border-r px-4 py-3 flex items-center gap-2'>
          <FontAwesomeIcon icon={faCalendarDays} className='text-gray-500' />
          <span
            onClick={() => setOpenDate(!openDate)}
            className='text-sm text-black font-medium cursor-pointer select-none'
          >
            {`${date[0].startDate.toDateString()} — ${date[0].endDate.toDateString()}`}
          </span>
          {openDate && (
            <div
              ref={dateRef}
              className=' top-[60px] left-0 z-50 bg-white p-4 shadow-xl rounded-lg'
            >  //absolute positioning for calendar problem
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='text-black'
              />
            </div>
          )}
        </div>

        {/* Guests */}
        <div className='flex items-center gap-2 px-4 py-3 w-full sm:w-[30%] border-b sm:border-b-0 sm:border-r bg-white'>
          <FontAwesomeIcon icon={faPerson} className='text-gray-500' />
          <span onClick={() => setOpenOptions( !openOptions )} className='text-sm text-black font-medium'>
            {`${options.adult} adult · ${options.children} children · ${options.room} room`}
          </span>
          {openOptions && <div ref={optionsRef} className="options  top-[50px] bg-white text-black rounded-md">
            <div className="optionItem w-[200px] flex justify-between items-center p-2 border-b">
              <span className="optionText">Adult</span>
              <div className="optionCounter flex items-center gap-4">
              <button className='optionCounterButton bg-gray-400 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-500' onClick={() => handleOptions( "adult", "d")} disabled={options.adult <= 1} >-</button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button className='optionCounterButton bg-gray-400 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-500'onClick={() => handleOptions( "adult", "i")}>+</button>
              </div>
            </div>
            <div className="optionItem  w-[200px] flex justify-between items-center p-2 border-b">
              <span className="optionText">Children</span>
              <div className="optionCounter flex items-center gap-4">
              <button className='optionCounterButton bg-gray-400 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-500' onClick={() => handleOptions("children", "d")} disabled={options.children <= 0}>-</button>
              <span className="optionCounterNumber">{options.children}</span>
              <button className='optionCounterButton bg-gray-400 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-500' onClick={() => handleOptions("children", "i")}>+</button>
              </div>
            </div>
            <div className="optionItem  w-[200px] flex justify-between items-center p-2 border-b">
              <span className="optionText">Room</span>
              <div className="optionCounter flex items-center gap-4">
              <button className='optionCounterButton bg-gray-400 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-500' onClick={() => handleOptions("room", "d")} disabled={options.room <= 1}>-</button>
              <span className="optionCounterNumber">{options.room}</span>
              <button className='optionCounterButton bg-gray-400 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-500' onClick={() => handleOptions("room", "i")}>+</button>
              </div>
            </div>
          </div>}
        </div>

        {/* Search Button */}
        <button className='bg-[#0071c2] text-white font-semibold px-6 py-3 hover:bg-[#005fa3] text-sm w-full sm:w-auto'>
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;
