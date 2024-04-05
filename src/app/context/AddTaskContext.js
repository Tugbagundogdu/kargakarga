'use client';
import React, { createContext, useState, useContext } from 'react';

const ShowAddTaskContext = createContext();

// Context sağlayıcısı bileşeni
export const ShowAddTaskProvider = ({ children }) => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <ShowAddTaskContext.Provider value={{ showAddTask, setShowAddTask }}>
      {children}
    </ShowAddTaskContext.Provider>
  );
};

export const useShowAddTask = () => useContext(ShowAddTaskContext)