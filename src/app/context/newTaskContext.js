'use client';
import React, { createContext, useContext, useState } from 'react';

const NewTaskContext = createContext();

export const useNewTask = () => useContext(NewTaskContext);

export const NewTaskProvider = ({ children }) => {
  const [newTasks, setNewTasks] = useState({});

  const toggleNewTask = (boardId) => {
    setNewTasks((prevTasks) => ({
      ...prevTasks,
      [boardId]: !prevTasks[boardId]
    }));
  };

  return (
    <NewTaskContext.Provider value={{ newTasks, toggleNewTask }}>
      {children}
    </NewTaskContext.Provider>
  );
};
