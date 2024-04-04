import Dashboard from '@/components/Dashboard'
import Header from '@/components/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className="flex">
      <Sidebar/>
      <Dashboard/>
      </div>
    </div>
  )
}

export default page
