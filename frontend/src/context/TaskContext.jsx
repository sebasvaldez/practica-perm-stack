import { createContext, useEffect, useState } from "react";
import {
  getAllTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks.api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState([]);

  const loadTasks = async () => {
    const resp = await getAllTasksRequest();
    setTasks(resp.data);
  };

  const deleteTask = async (id) => {
    const resp = await deleteTaskRequest(id);

    if (resp.status === 204) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
    console.log(resp);
  };

  const loadTask = async (id) => {
    const resp = await getTaskRequest(id);
    return resp.data;
  };

  const createTask = async (task) => {
    try {
      const resp = await createTaskRequest(task);
      setTasks([...tasks, resp.data]);

      return resp.data;
    } catch (error) {
      if (error.response) {
        setError([error.response.data.error]);
      }
    }
  };

  const updateTask = async (id, task) => {
    try {
      const resp = await updateTaskRequest(id, task);
      return resp.data;
    } catch (error) {
      if(error.response){
        setError([error.response.data.error]);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError([]);
    }, 4000);
  }, []);


  return (
    <TaskContext.Provider
      value={{
        tasks,
        error,
        loadTasks,
        deleteTask,
        createTask,
        loadTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
