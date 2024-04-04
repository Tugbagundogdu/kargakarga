import axios from 'axios';
import React from 'react'
import { FaTrash } from "react-icons/fa";

const DeleteTask = ({code}) => {

    const userToken = localStorage.getItem("userToken");
    const deleteTask = async () => {
      try {
        const res = await axios.delete(`https://api.management.parse25proje.link/api/tasks/${code}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  return (
    <div className='flex justify-end items-end cursor-pointer'>
      <FaTrash size={20} color='tomato' onClick={deleteTask}/>
    </div>
  )
}

export default DeleteTask
