import Image from 'next/image';
import React from 'react'
import { LuBell } from "react-icons/lu";
import Logo from "../assets/image 1.png";


const Header = () => {
  return (
    <div className='flex justify-between h-20 items-center px-6 border-b border-gray-300'>
      <div className='text-[#145389] font-bold text-2xl'>
        kargakarga
      </div>
      <div className='flex items-center space-x-4'>
        <LuBell size={25} color='#757e91'/>
        <LuBell size={25} color='#757e91'/>
        <Image src={Logo} alt='logo' />
      </div>
    </div>
  )
}

export default Header
