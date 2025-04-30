import React from 'react'

function MailList() {
    return (
        <div className="mail bg-[#003B95] p-[20px] flex justify-center items-center">
            <div className="container w-full max-w-[600px] flex flex-col items-center text-white justify-center">
                <h1 className="text-2xl font-bold">Save time, save money!</h1>
                <span className="text-lg">Sign up and we'll send the best deals to you</span>
                <div className="mailInputContainer flex gap-[10px] mt-[20px] sm:flex-row flex-col w-full">
                    <input type="text" placeholder="Your Email" className="p-[10px] w-full bg-white text-gray-600 outline-none rounded-lg" />
                    <button className="bg-[#005FA3] p-[15px] rounded-lg font-bold cursor-pointer hover:bg-[#001ea3] w-full sm:w-auto">Subscribe</button>
                </div>
                <span className="text-sm mt-[10px]">We won't share your email.</span>
            </div>
        </div>
    )
}

export default MailList