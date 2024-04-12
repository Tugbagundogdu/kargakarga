import React from 'react'
import { FaChevronUp } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import icons from "../../assets/Frame icons.png"
import Image from 'next/image';


const TaskDetailHeader = () => {
  return (
    <div className='flex justify-between items-center border-b border-gray-200 px-6 pb-3'>
      <div className='flex space-x-5'>
        <FaChevronUp size={20} color='#555861' />
        <FaChevronUp className='rotate-180' size={20} color='#555861' />
        <BsHouseDoor size={20} color='#555861' />
        <FaChevronUp className='mt-1 rotate-90 ' size={12} color='lightGray' />
        <p className='text-sm text-[#555861] font-semibold'>25 Project</p>
        <FaChevronUp  className='mt-1 rotate-90 ' size={12} color='lightGray' />
        <p className='text-sm text-[#555861] font-semibold'>Projects</p>
        <FaChevronUp  className='mt-1 rotate-90 ' size={12} color='lightGray' />
        <p className='text-sm font-semibold text-blue-500 '>Frontend Case</p>
        
      </div>
      <div>
        <Image src={icons} alt="icons" />
      </div>
    </div>
  )
}

export default TaskDetailHeader
