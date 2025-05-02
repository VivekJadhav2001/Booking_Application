import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch.js'
// import axios from 'axios';

function FeaturedProperties() {

    const { data, loading, error } = useFetch("/api/v1/hotel/countByCity?cities=berlin,LasVegas,london");

    // // console.log(data)
    // useEffect(() => {
    //     console.log("Fetched data:", data);  // Check the entire response
    // }, [data]);

    // const fetchData = async () => {
    //     try {
    //       const res = await axios.get("http://localhost:8000/api/v1/hotel/countByCity?cities=berlin,LasVegas,london", {
    //         withCredentials: true,
    //       });
    //       console.log("Fetched data:", res.data.data); // ✅ should log [1, 1, 0]
    //       setData(res.data.data);
    //     } catch (err) {
    //       console.error("Error fetching data:", err);
    //     }
    //   };
    // useEffect(() => {
    //     fetchData();
    // }, []);     

    return (
        <div className='featured w-full max-w-[1350px] flex flex-wrap  gap-[35px] mt-[25px] mb-[50px] z-1'>
            <div className="featuredItem relative rounded-lg  overflow-hidden border-2 border-slate-200 shadow-lg">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className='h-[300px] w-full object-cover cursor-pointer' />
                <div className="details p-1.5">
                    <div className="homesTitle">
                        <h1 className='font-bold text-lg mt-3'>Aparthotel Stare Miasto</h1>
                        <h2 className='text-gray-500'>Old Town, Polan, Krakow</h2>
                    </div>
                    <div className="details flex justify-start items-center gap-2.5 mt-2">
                        <span className='h-[30px] w-[30px] flex justify-center items-center rounded-lg bg-[#003B95]'><h2 className='text-lg text-white font-medium'>8.0</h2></span>
                        <div className="reviews">
                            <h2>Fabulous</h2>
                            <h3 className='text-gray-500'>3,211 reviews</h3>
                        </div>

                    </div>
                    <div className="price flex justify-end items-end gap-2.5 mt-2">
                        <h2 className='text-gray-500 font-medium'>Starting from</h2>
                        <span className=' text-lg font-medium'>₹</span>
                        <h1 className='text-lg font-bold'>12,546</h1>
                    </div>
                </div>
            </div>

            <div className="featuredItem relative rounded-lg  overflow-hidden border-2 border-slate-200 shadow-lg ">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=" alt="" className='h-[300px] w-full object-cover cursor-pointer' />
                <div className="details p-1.5">
                    <div className="homesTitle">
                        <h1 className='font-bold text-lg mt-3'>7Seasons Apartment Budapest</h1>
                        <h2 className='text-gray-500'>06. Terezvaros, Hungary, Budapest</h2>
                    </div>
                    <div className="details flex justify-start items-center gap-2.5 mt-2">
                        <span className='h-[30px] w-[30px] flex justify-center items-center rounded-lg bg-[#003B95]'><h2 className='text-lg text-white font-medium'>8.8</h2></span>
                        <div className="reviews">
                            <h2>Fabulous</h2>
                            <h3 className='text-gray-500'>11,340 reviews</h3>
                        </div>

                    </div>
                    <div className="price flex justify-end items-end gap-2.5 mt-2">
                        <h2 className='text-gray-500 font-medium'>Starting from</h2>
                        <span className=' text-lg font-medium'>₹</span>
                        <h1 className='text-lg font-bold'>14,246</h1>
                    </div>
                </div>
            </div>

            <div className="featuredItem relative rounded-lg  overflow-hidden border-2 border-slate-200 shadow-lg ">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=" alt="" className='h-[300px] w-full object-cover cursor-pointer' />
                <div className="details p-1.5">
                    <div className="homesTitle">
                        <h1 className='font-bold text-lg mt-3'>Numa Florence Vita</h1>
                        <h2 className='text-gray-500'>Santa Maria Novella, Italy, Florence</h2>
                    </div>
                    <div className="details flex justify-start items-center gap-2.5 mt-2">
                        <span className='h-[30px] w-[30px] flex justify-center items-center rounded-lg bg-[#003B95]'><h2 className='text-lg text-white font-medium'>9.0</h2></span>
                        <div className="reviews">
                            <h2>Fabulous</h2>
                            <h3 className='text-gray-500'>1,375 reviews</h3>
                        </div>

                    </div>
                    <div className="price flex justify-end items-end gap-2.5 mt-2">
                        <h2 className='text-gray-500 font-medium'>Starting from</h2>
                        <span className=' text-lg font-medium'>₹</span>
                        <h1 className='text-lg font-bold'>35,648</h1>
                    </div>
                </div>
            </div>

            <div className="featuredItem relative rounded-lg  overflow-hidden border-2 border-slate-200 shadow-lg ">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=" alt="" className='h-[300px] w-full object-cover cursor-pointer' />
                <div className="details p-1.5">
                    <div className="homesTitle">
                        <h1 className='font-bold text-lg mt-3'>Oriente Palace Apartment</h1>
                        <h2 className='text-gray-500'>Centro, Spain, Madrid</h2>
                    </div>
                    <div className="details flex justify-start items-center gap-2.5 mt-2">
                        <span className='h-[30px] w-[30px] flex justify-center items-center rounded-lg bg-[#003B95]'><h2 className='text-lg text-white font-medium'>8.9</h2></span>
                        <div className="reviews">
                            <h2>Fabulous</h2>
                            <h3 className='text-gray-500'>3,352 reviews</h3>
                        </div>

                    </div>
                    <div className="price flex justify-end items-end gap-2.5 mt-2">
                        <h2 className='text-gray-500 font-medium'>Starting from</h2>
                        <span className=' text-lg font-medium'>₹</span>
                        <h1 className='text-lg font-bold'>45,896</h1>
                    </div>
                </div>
            </div>


            <div className="featuredItem relative rounded-lg  overflow-hidden border-2 border-slate-200 shadow-lg ">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/644557000.webp?k=453987739ccc4997e9262937887cbe2a7f657f3ca8428adaeff872f3d7b40c25&o=" alt="" className='h-[300px] w-full object-cover cursor-pointer' />
                <div className="details p-1.5">
                    <div className="homesTitle">
                        <h1 className='font-bold text-lg mt-3'>Unique Royal Basement residence</h1>
                        <h2 className='text-gray-500'>Amsterdam, NetherLands</h2>
                    </div>
                    <div className="details flex justify-start items-center gap-2.5 mt-2">
                        <span className='h-[30px] w-[30px] flex justify-center items-center rounded-lg bg-[#003B95]'><h2 className='text-lg text-white font-medium'>9.8</h2></span>
                        <div className="reviews">
                            <h2>Exceptional</h2>
                            <h3 className='text-gray-500'>20 reviews</h3>
                        </div>

                    </div>
                    <div className="price flex justify-end items-end gap-2.5 mt-2">
                        <h2 className='text-gray-500 font-medium'>Starting from</h2>
                        <span className=' text-lg font-medium'>₹</span>
                        <h1 className='text-lg font-bold'>38,854</h1>
                    </div>
                </div>
            </div>

            <div className="featuredItem relative rounded-lg  overflow-hidden border-2 border-slate-200 shadow-lg ">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/185472383.webp?k=95fc409b0f59498217c9a2fc8a6217a1cfde00fb3ee5ddf29660b56385cae41b&o=" alt="" className='h-[300px] w-full object-cover cursor-pointer' />
                <div className="details p-1.5">
                    <div className="homesTitle">
                        <h1 className='font-bold text-lg mt-3'>Unique Royal Basement residence</h1>
                        <h2 className='text-gray-500'>Amsterdam, NetherLands</h2>
                    </div>
                    <div className="details flex justify-start items-center gap-2.5 mt-2">
                        <span className='h-[30px] w-[30px] flex justify-center items-center rounded-lg bg-[#003B95]'><h2 className='text-lg text-white font-medium'>9.8</h2></span>
                        <div className="reviews">
                            <h2>Exceptional</h2>
                            <h3 className='text-gray-500'>20 reviews</h3>
                        </div>

                    </div>
                    <div className="price flex justify-end items-end gap-2.5 mt-2">
                        <h2 className='text-gray-500 font-medium'>Starting from</h2>
                        <span className=' text-lg font-medium'>₹</span>
                        <h1 className='text-lg font-bold'>38,854</h1>
                    </div>
                </div>
            </div>

            



        </div>
    )
}

export default FeaturedProperties

