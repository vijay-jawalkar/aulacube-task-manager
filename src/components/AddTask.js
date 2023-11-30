import { useState } from "react";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const [ priority, setPriority] = useState("low");
  const [ progress, setProgress] = useState("Pending");

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (task.id) {
        const date = new Date();
        const updatedTaskList = taskList.map((todo) =>
          todo.id === task.id
            ? {
                id: task.id,
                name: task.name,
                description: task.description,
                priority: priority,
                progress: progress,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
              }
            : todo
        );
        setTaskList(updatedTaskList);
        setTask({});
      } else {
        const date = new Date();
        const newTask = {
          id: date.getTime(),
          name: e.target.name.value,
          description: e.target.description.value,
          priority: priority,
          progress: progress,
          
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        };
  
        setTaskList([...taskList, newTask]);
        setTask({});
      }
    };
  
    return (
      <section className="addTask">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={task.name || ""}
            autoComplete="off"
            placeholder="task name"
            maxLength="25"
            required
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />

<input
            type="text"
            name="description"
            value={task.description || ""}
            autoComplete="off"
            placeholder="task description"
            maxLength="100"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
           <select
          onChange={(event) => setPriority(event.target.value)}
          value={priority}
        >
          <option className="low" value="low"> Low </option>
          <option className="medium" value="medium"> Medium </option>
          <option className="high" value="high"> High </option>
        </select>

        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option className="low" value = "pending"> Pending </option>
          <option className="medium" value = "completed"> Completed </option>
         
        </select>
          <button type="submit"> {task.id ? "Update" : "Add"} </button>
        </form>
      </section>
    );
  };
  