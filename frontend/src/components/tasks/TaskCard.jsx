import { Button, Card } from "../ui";
import { useTasks } from "../../hooks/useTasks";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BsPencil } from "react-icons/bs";

export const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const { deleteTask } = useTasks();

  return (
    <Card key={task.id} className="px-7 py-4 my-4 w-80 mx-1">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button
          onClick={() => {
            navigate(`/tasks/${task.id}/edit`);
          }}
        >
          <BsPencil />
          Editar
        </Button>
        <Button
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
              await deleteTask(task.id);
            }
          }}
          className="bg-red-700 hover:bg-red-600"
        >
          <PiTrashSimpleLight />
          Eliminar
        </Button>
      </div>
    </Card>
  );
};
