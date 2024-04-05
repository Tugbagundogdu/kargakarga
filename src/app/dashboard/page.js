import Dashboard from '@/components/Dashboard'
import Header from '@/components/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import LayoutComponent from '../LayoutComponent'
const page = () => {
  return (
    <LayoutComponent>
      <Header/>
      <div className="flex">
      <Sidebar/>
      <Dashboard/>
      </div>
    </LayoutComponent>
  )
}

export default page
