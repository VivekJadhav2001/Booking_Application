import React from 'react'
import './PropertyList.css'
import useFetch from '../../hooks/useFetch'
export const PropertyList = () => {

    const { data, loading, error } = useFetch("/api/v1/hotel/countByType")

    console.log(data)

    const images = [
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o="
    ]

    return (
        <div className="pList  w-full max-w-[1350px] flex flex-wrap justify-between gap-[15px] mt-[25px] mb-[50px] z-1">
            {loading ? ("Loading Please Wait") :
                (<>
                    {data && images.map((image,index)=>(
                        <div key={index} className="pListItem cursor-pointer">
                        <img src={image} alt="" className="pListImg rounded-2xl overflow-hidden" />
                        <div className="pListTitles ml-[10px] mt-[5px]">
                            <h1 className='font-bold text-lg capitalize'>{data[index]?.type}</h1>
                            <h2 className='text-gray-400 capitalize'>{data[index]?.count} {data[index]?.type}</h2>
                        </div>
                    </div>
                    ))}


                </>)}
        </div>
    )
}
