import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DeleteTask = ({code}) => {

  const queryClient = useQueryClient();

    const userToken = localStorage.getItem("userToken");
    const deleteTask = async () => {
        const res = await axios.delete(`https://api.management.parse25proje.link/api/tasks/${code}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(res.data);
    }

    const { mutate , isLoading , isError , isSuccess } = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["boards"]});
          toast.success("Task deleted successfully");
        },
    })
  return (
    <div className='flex justify-end items-end cursor-pointer'>
      <FaTrash size={20} color='tomato' onClick={mutate}/>
    </div>
  )
}

export default DeleteTask
