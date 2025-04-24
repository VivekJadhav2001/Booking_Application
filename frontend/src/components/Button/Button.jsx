import React from 'react'

function Button({children}) {
  return (
    <button className='px-4 py-3 bg-white text-base hover:bg-[#F0F6FD] text-[#003B95] font-medium rounded-lg transition duration-200 cursor-pointer'>
        {children}
    </button>
  )
}

export default Button