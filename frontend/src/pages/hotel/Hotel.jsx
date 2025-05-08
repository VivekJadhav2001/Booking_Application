import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { IoLocation } from "react-icons/io5";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext.jsx';



function Hotel() {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 7 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 7 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  }

  const photos = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/644557000.webp?k=453987739ccc4997e9262937887cbe2a7f657f3ca8428adaeff872f3d7b40c25&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/185472383.webp?k=95fc409b0f59498217c9a2fc8a6217a1cfde00fb3ee5ddf29660b56385cae41b&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/644557000.webp?k=453987739ccc4997e9262937887cbe2a7f657f3ca8428adaeff872f3d7b40c25&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/185472383.webp?k=95fc409b0f59498217c9a2fc8a6217a1cfde00fb3ee5ddf29660b56385cae41b&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
  ]

  const location = useLocation()
  // console.log(location);
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/api/v1/hotel/${id}`)

  // console.log(data)

  const {dates} = useContext(SearchContext)

  console.log(dates);
  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "Loading Please wait" : (<div className="hotelContainer ">
        {open && <div className="Slider flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-10">
          <IoMdClose onClick={handleClose} className='h-[50px] w-[50px] cursor-pointer absolute top-[20px] right-[20px] bg-black text-white rounded-lg ' />
          <BiSolidLeftArrowSquare onClick={() => handleMove("left")} className='h-[50px] w-[50px] cursor-pointer bg-black text-white rounded-lg   ' />
          <div className="sliderWrapper max-w-[1350px] mx-auto mt-[20px] mb-[20px]">
            <img src={photos[slideNumber]} alt="" className='h-[50vh] w-[50vw] object-cover' />
          </div>
          <BiSolidRightArrowSquare onClick={() => handleMove("right")} className='h-[50px] w-[50px] cursor-pointer bg-black text-white rounded-lg   ' />
        </div>}
        <div className="titleContainer flex justify-between items-start max-w-[1350px] mx-auto mt-[20px] mb-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className='text-2xl font-bold'>{data.name}</h1>
            <span className='flex'><IoLocation /><small>{data.address}</small></span>
            <span className="text-[#0861A9] font-semibold">Excellent Location - 500m from {data.city}</span>
            <h2 className='text-green-600 font-semibold'>Book a stay over ₹{data.cheapestPrice} at this property and get a free airport taxi</h2>
          </div>
          <button className='bg-blue-600 text-white font-bold p-2.5 rounded-lg cursor-pointer hover:bg-blue-700 '>Reserve or Book Now!</button>
        </div>
        <div className="photos photos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] max-w-[1350px] mx-auto mt-[20px] mb-[50px] z-1">

          {photos.map((photo, index) => (
            <img onClick={() => handleOpen(index)} key={index} src={photo} alt="" className='w-[300px] h-[300px] object-cover cursor-pointer' />
          ))}
        </div>
        <div className='w-full max-w-[300px] bg-blue-400 text-black p-4 flex flex-col gap-4 rounded-xl shadow-md ml-4'>
          <h2 className='text-xl sm:text-2xl font-bold'>Perfect for a 9-night stay</h2>
          <p className='text-sm sm:text-base leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic laboriosam reprehenderit voluptates. Laudantium exercitationem
          </p>
          <p className='text-xl sm:text-2xl'><span className='font-bold'>₹{data.cheapestPrice}</span> (9 nights)</p>
          <button className='bg-blue-600 text-white font-semibold sm:font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer'>
            Reserve or Book Now!
          </button>
        </div>

      </div>)}
      <Footer />
    </div>
  )
}

export default Hotel