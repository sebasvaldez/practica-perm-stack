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
    className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4"
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
