import React, { useContext, createContext, useState } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTaskProvider = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([
      ...taskList,
      {
        taskId: v4(),
        task,
        completed: false,
      },
    ]);
  };

  const setTaskStatus = (taskId, status) => {
    setTaskList(
      taskList.map((singleTask) => {
        return singleTask.taskId === taskId
          ? { ...singleTask, completed: status }
          : singleTask;
      })
    );
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, setTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
