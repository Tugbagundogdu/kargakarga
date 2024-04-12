import React from 'react'
import LeftContent from './LeftContent'
import AsideBar from './AsideBar'

const TaskDetailContent = ({lists}) => {
  return (
    <div className='flex w-full bg-slate-700'>
      <LeftContent lists={lists}/>
      <AsideBar/>
    </div>
  )
}

export default TaskDetailContent
