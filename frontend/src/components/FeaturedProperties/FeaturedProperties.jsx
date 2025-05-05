import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch.js'
// import axios from 'axios';

function FeaturedProperties() {

    const { data, loading, error } = useFetch("/api/v1/hotel/getAll?featured=true&limit=5&min=100&max=4000");

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


    const photos = [
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/644557000.webp?k=453987739ccc4997e9262937887cbe2a7f657f3ca8428adaeff872f3d7b40c25&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/185472383.webp?k=95fc409b0f59498217c9a2fc8a6217a1cfde00fb3ee5ddf29660b56385cae41b&o="
    ]

    return (
        <div className='featured w-full max-w-[1350px] flex flex-wrap  gap-[35px] mt-[25px] mb-[50px] z-1'>

            {loading ? ("Loading Please Wait") : (<>
                { data && data.map((item, i) => (
                    <div className="featuredItem relative rounded-lg  overflow-hidden border-2 border-slate-200 shadow-lg " key={i}>
                        <img src={photos[i]} alt="" className='h-[300px] w-full object-cover cursor-pointer' />
                        <div className="details p-1.5">
                            <div className="homesTitle">
                                <h1 className='font-bold text-lg mt-3'>{item.name}</h1>
                                <h2 className='text-gray-500'>{item.city}</h2>
                            </div>
                            {item.rating && <div className="details flex justify-start items-center gap-2.5 mt-2">
                                <span className='h-[30px] w-[30px] flex justify-center items-center rounded-lg bg-[#003B95]'><h2 className='text-lg text-white font-medium'>{item.rating}</h2></span>
                                <div className="reviews">
                                    <h2>Exceptional</h2>
                                    <h3 className='text-gray-500'>{item.review} reviews</h3>
                                </div>

                            </div>}
                            <div className="price flex justify-end items-end gap-2.5 mt-2">
                                <h2 className='text-gray-500 font-medium'>Starting from</h2>
                                <span className=' text-lg font-medium'>₹</span>
                                <h1 className='text-lg font-bold'>{item.cheapestPrice}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </>)}





        </div>
    )
}

export default FeaturedProperties

