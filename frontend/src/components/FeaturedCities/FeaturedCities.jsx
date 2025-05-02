import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch.js'

function FeaturedCities() {

    const {data, loading, error} = useFetch('/api/v1/hotel/countByCity?cities=mumbai,varanasi,chennai')

    useEffect(() => {
        console.log(data)

    },[data])

  return (
    <div className='featured w-full max-w-[1350px] flex flex-wrap justify-between gap-[15px] mt-[50px] mb-[50px] z-1'>
        {loading ? ("Loading Please Wait") :(<>
            <div className="featuredItem relative rounded-lg  overflow-hidden ">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" className='h-[350px] w-full object-cover cursor-pointer' />
            <div className="featuredTitles absolute bottom-[30px] left-[20px] text-white font-medium text-[25px]">
                <h1>Mumbai</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem relative rounded-lg  overflow-hidden ">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=" alt="" className="h-[350px] w-full object-cover cursor-pointer " />
            <div className="featuredTitles absolute bottom-[30px] left-[20px] text-white font-medium text-[25px]">
                <h1>Varanasi</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem relative rounded-lg  overflow-hidden ">
            
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" className='h-[350px] w-full object-cover cursor-pointer' />
            <div className="featuredTitles absolute bottom-[30px] left-[20px] text-white font-medium text-[25px]">
                <h1>Chennai</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
        </>)}
    </div>
  )
}

export default FeaturedCities