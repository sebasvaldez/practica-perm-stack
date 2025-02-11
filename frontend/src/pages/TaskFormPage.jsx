import { Card, Input, TextArea, Label, Button } from "../components/ui/";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTasks } from "../hooks/useTasks";

export const TaskFormPage = () => {
  const [postError, setPostError] = useState([]);

  const navigate = useNavigate();

  const { createTask, loadTask  } = useTasks();

  const params = useParams();
  console.log(params)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const newTask = await createTask(data);
    if (newTask) {
      navigate("/tasks");
    }
  });

 



  useEffect(() => {
    if(params.id){
      loadTask(params.id).then((data)=>{setValue("title", data.title); setValue("description", data.description)})
    }
  
   
  }, [])
  

  return (
    <div className="flex justify-center items-center h-[calc(100vh-9rem)]">
      <Card>
        {postError.length > 0 && (
          <div className="text-red-500 text-center">{postError}</div>
        )}
        <h2 className="text-3xl font-bold my-4">{params.id? "Editar tarea": "Crear tarea"}</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title">Título</Label>
          <Input
            type="text"
            placeholder="Título"
            {...register("title", { required: true })}
            autoFocus
          />
          {errors.title && (
            <span className="text-red-500">El título es requerido</span>
          )}
          <Label htmlFor="description">Descripcion</Label>
          <TextArea {...register("description")} rows="3" />

          {errors.description && (
            <span className="block text-red-500 py-4">
              La descripción es requerida
            </span>
          )}

          <Button>{params.id? "Editar":"Crear"}</Button>
        </form>
      </Card>
    </div>
  );
};
