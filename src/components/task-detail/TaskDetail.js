import React from 'react'

const TaskDetail = ({setShowDetail , board , taskId}) => {

   const lists = board.tasks?.filter(board => board.id === taskId)
  return (
    <div className='fixed !m-0 top-0 left-0 z-10 flex justify-center items-center bg-[#555861] w-full h-full'>
      {
        lists.map((board , index) => (
            <div key={index} className=' w-4/5 h-2/3 bg-white rounded-lg p-6'>
                <h1>{board.name}</h1>
                <h2>{board.description}</h2>
                <h3>{board.code}</h3>
                <button onClick={() => setShowDetail(false)}>Close</button>
            </div>
        ))
      }
    </div>
  )
}

export default TaskDetail
