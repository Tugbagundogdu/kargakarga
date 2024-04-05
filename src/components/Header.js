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
      <div className='md:flex items-center space-x-4 hidden '>
        <LuBell size={25} color='#757e91'/>
        <LuBell size={25} color='#757e91'/>
        <Image src={Logo} alt='logo' />
      </div>
      <div className='block md:hidden cursor-pointer bg-slate-300 rounded-md p-3' >
        Projeler
      </div>
    </div>
  )
}

export default Header
