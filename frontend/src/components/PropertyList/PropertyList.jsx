import React from 'react'
import './PropertyList.css'
export const PropertyList = () => {
  return (
    <div className="pList  w-full max-w-[1350px] flex flex-wrap justify-between gap-[15px] mt-[25px] mb-[50px] z-1">
        <div className="pListItem cursor-pointer">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=" alt="" className="pListImg rounded-2xl overflow-hidden" />
            <div className="pListTitles ml-[10px] mt-[5px]">
                <h1 className='font-bold text-lg'>Hotels</h1>
                <h2 className='text-gray-400'>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem cursor-pointer">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=" alt="" className="pListImg rounded-2xl overflow-hidden" />
            <div className="pListTitles ml-[10px] mt-[5px] ">
                <h1 className='font-bold text-lg'>Apartments</h1>
                <h2 className='text-gray-400'>150 Apartments</h2>
            </div>
        </div>
        <div className="pListItem cursor-pointer">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=" alt="" className="pListImg rounded-2xl overflow-hidden" />
            <div className="pListTitles ml-[10px] mt-[5px]">
                <h1 className='font-bold text-lg'>Resorts</h1>
                <h2 className='text-gray-400'>300 Resorts</h2>
            </div>
        </div>
        <div className="pListItem cursor-pointer">
            <img src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o=" alt="" className="pListImg rounded-2xl overflow-hidden" />
            <div className="pListTitles ml-[10px] mt-[5px]">
                <h1 className='font-bold text-lg'>Villas</h1>
                <h2 className='text-gray-400'>233 Villas</h2>
            </div>
        </div>
    </div>
  )
}
