import React from 'react'
import Button from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className='navbar h-[80px] bg-[#003B95] flex justify-center'>
    <div className="navContainer w-full max-w-[1350px] text-white flex items-center justify-between sm:ml-10 sm:mr-10">
        <span className="logo font-medium text-4xl  cursor-pointer" onClick={handleClick}>Booking.com</span>
        <div className="navItems gap-2 flex items-center">
            <Button>Register</Button>
            <Button>Login</Button>
        </div>
    </div>
</div>

  )
}

export default Navbar