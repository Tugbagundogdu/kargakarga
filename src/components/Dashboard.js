'use client';
import React, { useState } from 'react'
import Cards from './Cards';


const Dashboard = () => {
    const List = ['Boards' , 'List' , 'Other' , 'Other' , 'Other' , 'Other' , 'Other']
    const [activeButton , setActiveButton] = useState(0);

  return (
    <div className='bg-[#f3f6fd] w-full  md:w-9/12  p-8 '>
      <h1 className='text-2xl text-[#145389] font-bold'>Frontend Case</h1>
      <div className='md:flex border border-gray-300 rounded-md max-w-min mt-7 bg-white hidden'>
      {
        List.map((item , index) =>(
            <div key={index} className='max-md:text-sm max-lg:px-3 px-4 py-2 border border-r cursor-pointer'> 
            <div  onClick={() =>setActiveButton(index)} className={activeButton === index ? 'text-[#145389] font-bold' : '' }>{item}</div>
            </div>
        ))
      }
      </div>
      <Cards/>
    </div>
  )
}

export default Dashboard
