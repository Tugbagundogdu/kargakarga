import React from 'react'
import TaskDetailHeader from './TaskDetailHeader'

const TaskDetail = ({setShowDetail , board , taskId}) => {

   const lists = board.tasks?.filter(board => board.id === taskId)
  return (
    <div className='fixed !m-0 top-0 left-0 z-10 flex justify-center items-center bg-[#555861] w-full h-full'>
     
      {
        lists.map((board , index) => (
            <div key={index} className='relative w-4/5 h-2/3 bg-white rounded-lg py-6'>
               <TaskDetailHeader/>
                <h1>{board.name}</h1>
                <h2>{board.description}</h2>
                <h3>{board.code}</h3>
                <button className='absolute top-6 right-6 bg-red-400 rounded-full w-6 h-6 text-sm flex justify-center items-center text-white font-bold' onClick={() => setShowDetail(false)}>X</button>
            </div>
        ))
      }
    </div>
  )
}

export default TaskDetail
