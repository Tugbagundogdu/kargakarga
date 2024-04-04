import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'


const Sidebar = () => {
  return (
    <div className='w-3/12 border-r border-gray-300 h-screen flex'>
      <Leftbar/>
      <Rightbar/>
    </div>
  )
}

export default Sidebar
