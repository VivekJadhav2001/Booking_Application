import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';
import Footer from '../../components/Footer/Footer';
import useFetch from '../../hooks/useFetch'

function AllHotels() {

  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date[0]);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);
  
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error, reFetch} = useFetch(`/api/v1/hotel/getAll?city=${destination}&min=${min || 1}&max=${max || 999}`)

  const handleSearch = () => {
    reFetch(`/api/v1/hotel/getAll?city=${destination}`)
  }

  // console.log(data)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-[20px]">
        <div className="listWrapper mx-3.5 w-full w-max-[1024px] flex gap-[20px]">
          <div className="listSearch sticky p-[10px] rounded-lg h-[75vh] flex-1 bg-[#febb02]">
            <h1 className='text-2xl font-bold text-[#555] mb-[10px]'>Search</h1>

            <div className="lsItem">
              <label>Destination</label>
              <input 
                placeholder={destination ? destination.toString() : ""}
                className='bg-white outline-none rounded-lg ml-2 text-black pl-[10px]' 
                type="text" 
              />
            </div>

            <div className="lsItem mt-[15px] flex flex-col gap-[10px]">
              <label>Check-in Dates</label>
              <span 
                className='flex items-center bg-white p-2 cursor-pointer'
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date.startDate, "MM/dd/yyyy")} to ${format(date.endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={[date]}
                />
              )}
            </div>

            <div className="listItem mt-[15px] gap-[10px] flex flex-col">
              <label>Options</label>

              <div className="options mt-[10px] flex  justify-between">
                <span className="optionText">Min Price <small>(per Night)</small></span>
                <input
                type="number"
                className='optionInput bg-white h-[25px] w-[60px] pl-2'
                onChange={e => setMin(e.target.value)}
                />
              </div>

              <div className="options mt-[10px] flex justify-between">
                <span className="optionText">Max Price <small>(per Night)</small></span>
                <input
                type="number" 
                className='bg-white h-[25px] w-[60px] pl-2' 
                onChange={e => setMax(e.target.value)}

                />
              </div>

              <div className="options mt-[10px] flex justify-between">
                <span className="optionText">Adult</span>
                <input 
                  type="number" 
                  min={1} 
                  className='optionInput bg-white h-[25px] w-[40px] pl-4' 
                  placeholder={options.adult} 
                />
              </div>

              <div className="options mt-[10px] flex justify-between">
                <span className="optionText">Children</span>
                <input 
                  type="number" 
                  min={0} 
                  className='optionInput bg-white h-[25px] w-[40px] pl-4' 
                  placeholder={options.children} 
                />
              </div>

              <div className="options mt-[10px] flex justify-between">
                <span className="optionText">Room</span>
                <input 
                  type="number" 
                  min={1} 
                  className='optionInput bg-white h-[25px] w-[40px] pl-4' 
                  placeholder={options.room} 
                />
              </div>

            </div>

            <button 
            className='listBtn w-full bg-[#003B95] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#003B95]/80 mt-3'
            onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div className="listResult flex-3">
            {loading ? "Loading Please Wait" : (
              <>
              {data.map((item, index)=>(
                <SearchItem item={item} key={item._id} />
              ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Footer added here, outside the height-restricted listContainer */}
      <Footer />
    </div>
  )
}

export default AllHotels
