import React, { useState } from "react";
import { useTaskProvider } from "./TaskProvider";

const NewTaskEnter = () => {

    const {addTask} = useTaskProvider()

  const [newTask, setNewTask] = useState("");

  const handleAddButton = () => {
      addTask(newTask)
      setNewTask('')
  }

  return (
      <>
  <input type="text" name="newTask" placeholder='Start typing to add task...' onChange={(e)=>setNewTask(e.target.value)} value={newTask}/>
  <button onClick={handleAddButton}>ADD TASK</button>
  </>
  );
};

export default NewTaskEnter;
