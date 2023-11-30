import { useState, useRef } from "react";

export const TaskCard = ({ task, taskList, setTaskList, setTask }) => {
    const [checked, setChecked] = useState(false);
  const color = useRef("low");

  const handleDelete = (id) => {
    const updateTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updateTaskList);
  };

  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };


  if (task.priority === "medium") {
    color.current = "medium";
  } else if (task.priority === "high") {
    color.current = "high";
  } else {
    color.current = "low";
  }

  return (
    <li className={color.current}>
      <div className="task-container ">
        <span className="name"> {task.name} </span>
        <span className="description"> {task.description}</span>
      

        <span className="status">
          {" "}
          Status - {task.progress}  
      
        </span>

    

        <span className="time">
          {" "}
          {task.time} | {task.priority}
        </span>
      </div>

    

      <i class="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
      <i class="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
    </li>
  );
};
