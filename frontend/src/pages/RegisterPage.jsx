import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Card, Button, Label } from "../components/ui";
import { useAuth } from "../hooks/useAuth";
import { Container } from "../components/ui";

export const RegisterPage = () => {
  const { registerUser, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await registerUser(data);
    if (user) {
      navigate("/login");
      reset();
    }
  });

  return (
    <Container className="h-[calc(100vh-7rem)]  flex items-center justify-center ">
      <Card>
        {error &&
          error.map((err, index) => (
            <p key={index} className="text-red-500 text-center">
              {err}
            </p>
          ))}

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
    </Container>
  );
};
