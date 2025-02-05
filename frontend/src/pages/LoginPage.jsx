import { Card, Button, Input, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const {loginUser} = useAuth();
  const navigate= useNavigate();

  const onSubmit = handleSubmit(async (data) => {
   
    await loginUser(data);
    navigate("/tasks");
  
  });

  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">Ingresar</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            placeholder="Ingrese su correo electrónico."
            type="email"
            {...register("email", { required: true })}
          />

          <Label htmlFor="password">Contraseña</Label>
          <Input
            placeholder="Ingrese su contraseña."
            type="password"
            {...register("password", { required: true })}
          />

          <Button className="w-full" type="submit">
            Ingresar
          </Button>
          <div className="flex justify-between my-3">
            <p className="">No tienes una cuenta?</p>
            <Link className="font-bold" to="/register">
              Registrate
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
