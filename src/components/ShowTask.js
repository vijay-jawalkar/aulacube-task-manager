import { TaskCard } from "./TaskCard"

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
   

    

  
    return (
      <section className="showTask"  >
        <p className="head">
          <span>
            <span className="title"> Todo </span>
            <span className="count"> {taskList.length} </span>
          </span>
  
          <button className="clearAll" onClick={() => setTaskList([])}>
            {" "}
            Clear All{" "}
          </button>
        </p>
  
        <ul>
          {taskList.map((task) => (
            <TaskCard key = {task.id} task = {task} taskList = {taskList} setTaskList = {setTaskList} setTask = {setTask} />
             
             
          ))}
        </ul>
      </section>
    );
  };
  