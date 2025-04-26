import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPlaneDeparture, faTaxi } from '@fortawesome/free-solid-svg-icons';

function Header({type}) {
  const [activeItem, setActiveItem] = useState("stays");

  const menuItems = [
    { key: "stays", label: "Stays", icon: faBed },
    { key: "flights", label: "Flights", icon: faPlaneDeparture },
    { key: "cars", label: "Car rentals", icon: faCar },
    { key: "attractions", label: "Attractions", icon: faBed },
    { key: "taxis", label: "Airport taxis", icon: faTaxi },
  ];

  return (
    <div className='header bg-[#003B95] text-white flex justify-center'>
      <div className="headerContainer mt-[20px] mb-[20px] w-full max-w-[1350px]">
        <div className="headerList flex gap-[40px] sm:flex-row flex-col">
          {menuItems.map(item => (
            <div
              key={item.key}
              onClick={() => setActiveItem(item.key)}
              className={`headerListItem flex gap-[10px] items-center cursor-pointer px-3 py-2 rounded-full transition 
                ${activeItem === item.key ? 'bg-white text-[#003B95] font-medium' : 'text-white'}`}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
// This code defines a React functional component called Header. It uses the FontAwesomeIcon component to display icons for different menu items. The component maintains an active state to highlight the currently selected menu item. The menu items include "Stays", "Flights", "Car rentals", "Attractions", and "Airport taxis". The component is styled with Tailwind CSS classes for layout and design.