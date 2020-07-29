import React from "react";
import { useTaskProvider } from "./TaskProvider";

const SingleTask = ({ taskId,  task, completed, }) => {
  const { setTaskStatus } = useTaskProvider();
  const checkTask = (e) => {
    setTaskStatus(taskId, e.target.checked);
  };
  return (
    <tr>
      <td>
        <input type="checkbox" onChange={checkTask} />
      </td>
      <td>
        <span>{task}</span>
      </td>
    </tr>
  );
};

export default SingleTask;
