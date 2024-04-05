import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
 
const TaskAdd = ({setShowAddTask , boardId}) => {

  const queryClient = useQueryClient();

    const [formData , setFormData] = useState({
        name: "",
        description: "",
        boardId,
        flagId: 1 ,
        startDate: "",
        endDate: ""
      })

      const handleChange = (e) => {
        const value = e.target.name === 'flagId' ? parseInt(e.target.value) : e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value
        });
      }

  

      const userToken = localStorage.getItem('userToken');

      const addTask = async (e) => {
        e.preventDefault();
        console.log(formData, 'gonderdıgım data')
          const res = await axios.post('https://api.management.parse25proje.link/api/tasks', formData,{
              headers :{
                  Authorization: `Bearer ${userToken}`
              }
      })
      setShowAddTask(false);
      console.log(res.data , 'basarılı mı');
      }

      const {mutate , isLoading , isError } = useMutation({
        mutationFn: addTask,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["boards"]});
          toast.success('Task created successfully');
        }

      })

    if(isError){
      toast.error('An error occurred while creating the task');
    }

  return (
    
    <form onSubmit={mutate} className='flex flex-col task-shadow p-4 space-y-3'>
      <div className='flex justify-between'>
      <label htmlFor="name">Task Title</label>  
      <div className='cursor-pointer text-red-500 font-bold text-xl' onClick={() => setShowAddTask(false)}>X</div> 
      </div>  
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
      type="date" 
      name="startDate"
      value={formData.startDate}
      onChange={handleChange}
      className='border border-gray-400 outline-none rounded-md p-1'

    />
    <label htmlFor="endDate">End Date</label>
    <input
      type="date"
      name="endDate"
      value={formData.endDate}
      onChange={handleChange}
      className='border border-gray-400 outline-none rounded-md p-1'

    />
    <label htmlFor="flagId">Flag</label>
    <select
     name="flagId"
     value={formData.flagId}
     onChange={handleChange}
     className='border border-gray-400 outline-none rounded-md p-1'
    >
      <option value={1}>High Priority</option>
      <option value={2}>Medium Priority</option>
      <option value={3}>Low Priority</option>
      <option value={4}>Standart Priority</option>
      <option value={5}>Neutral Priority</option>
    </select>
    
    <button disabled={isLoading} className=' disabled:bg-gray-400 bg-slate-300 p-3 hover:bg-slate-400' type="submit">Create</button>
  </form>
  )
}

export default TaskAdd
