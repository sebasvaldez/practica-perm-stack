import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Card, Button, Label } from "../components/ui";
import { useAuth } from "../hooks/useAuth";
import { use } from "react";

export const RegisterPage = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate= useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await registerUser(data);
    navigate("/login");
    reset();
  });

  return (
    <div className="h-[calc(100vh-64px)]  flex items-center justify-center ">
      <Card>
        <h3 className="text-2xl font-bold text-center">Registro</h3>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input
            placeholder="Ingrese su nombre completo."
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-red-500">El nombre es requerido.</p>
          )}
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            placeholder="Ingrese su correo electrónico."
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500">El email es requerido.</p>
          )}
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingrese su contrseña."
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">El password es requerido.</p>
          )}

          <Button>Registrar</Button>
          <div className="flex justify-between my-3">
            <p className="">Ya estas registrado?</p>
            <Link className="font-bold" to="/login">
              Ingresar
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
