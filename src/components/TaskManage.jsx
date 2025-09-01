import React from 'react'
import List from './List';
import Header  from './Header'
import Tasks from './Tasks'
import { useState } from 'react';




const TaskManage = () => {
    const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

 

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const deleteTask = (index) => {
    const updated = [...taskList];
    updated.splice(index, 1);
    setTaskList(updated);
    if (editIndex === index) setEditIndex(null);
  };

  const startEditTask = (index) => {
    setEditIndex(index);
  };

  const updateTask = (updatedTask) => {
    const updated = [...taskList];
    updated[editIndex] = updatedTask;
    setTaskList(updated);
    setEditIndex(null);
  };
  return (
    <>
   <Header/>
   <Tasks
          onAddTask={addTask}
          onUpdateTask={updateTask}
          editingTask={editIndex !== null ? taskList[editIndex] : null}
        />

    <List
          tasks={taskList}
          onDelete={deleteTask}
          onEdit={startEditTask}
        />
        </>
  )
}
  
export default TaskManage