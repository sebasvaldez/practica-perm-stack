import { Button, Card } from "../ui";
import { useTasks } from "../../hooks/useTasks";
import { useNavigate } from "react-router-dom";

export const TaskCard = ({ task }) => {
  const navigate= useNavigate();
  const { deleteTask } = useTasks();

  return (
    <Card key={task.id} className="px-7 py-4">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button
        onClick={()=>{
          navigate(`/tasks/${task.id}/edit`)
        }}
        >Editar</Button>
        <Button
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
              await deleteTask(task.id);
            }
          }}
          className="bg-red-500 hover:bg-red-600"
        >
          Eliminar
        </Button>
      </div>
    </Card>
  );
};
