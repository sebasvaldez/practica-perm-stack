import { useEffect } from "react";
import { TaskCard } from "../components/tasks/TaskCard";
import { useTasks } from "../hooks/useTasks";

export const TasksPage = () => {

  const {tasks,loadTasks} = useTasks();


  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div
    className="grid grid-cols-3 gap-2"
    >
      {
        tasks.map((task)=>{

          return(
           <TaskCard key={task.id} task={task}/>
          )
        })
      }
    </div>
  );
};
