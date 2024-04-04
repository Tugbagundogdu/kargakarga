import { useNewTask } from '@/app/context/newTaskContext';
import axios from 'axios';
import React, { useState } from 'react'

const TaskAdd = () => {
    const { toggleNewTask } = useNewTask();

    const [formData , setFormData] = useState({
        name: "",
        description: "",
        boardId: 1,
        flagId: 2,
        startDate: "",
        endDate: ""
      })

      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
      }

      const userToken = localStorage.getItem('userToken');

      const createTask = async (e) => {
        toggleNewTask();
        e.preventDefault();
        console.log(formData, 'gonderdıgım data')
       try{
        const res = await axios.post('https://api.management.parse25proje.link/api/tasks', formData,{
            headers :{
                Authorization: `Bearer ${userToken}`
            }
    })
    console.log(res.data , 'basarılı mı kızz');
       }catch(err){
        console.log(err);
       }
      }

  return (
    <form onSubmit={createTask} className='flex flex-col task-shadow p-4 space-y-4'>
     <label htmlFor="name">Task Title</label>  
      <div className='cursor-pointer text-red-500' onClick={toggleNewTask()}>X</div> 
    <input
      type="text"
      name="name"
      placeholder="title"
      value={formData.name}
      onChange={handleChange}
      className='border border-gray-400 outline-none rounded-md p-1'
    />
    <label htmlFor="description">Task Description</label>
    <textarea
      name="description"
      placeholder="description"
      value={formData.description}
      onChange={handleChange}
      className='border border-gray-400 outline-none rounded-md p-1'

    ></textarea>
    <label htmlFor="startDate">Start Date</label>
    <input
      type="datetime-local" 
      name="startDate"
      value={formData.startDate}
      onChange={handleChange}
      className='border border-gray-400 outline-none rounded-md p-1'

    />
    <label htmlFor="endDate">End Date</label>
    <input
      type="datetime-local"
      name="endDate"
      value={formData.endDate}
      onChange={handleChange}
      className='border border-gray-400 outline-none rounded-md p-1'

    />
    <button className=' bg-slate-300 p-3 hover:bg-slate-400' type="submit">Create</button>
  </form>
  )
}

export default TaskAdd
