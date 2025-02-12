import { GoTasklist } from "react-icons/go";
import { MdAddTask } from "react-icons/md";


export const publicRoutes = [
 
  {
    name: "Ingresar",
    path: "/login",
  },
  {
    name: "Registrarse",
    path: "/register",
  },
  {
    name: "Nosotros",
    path: "/about",
  },
];

export const privateRoutes = [
  {
    name: "Tareas",
    path: "/tasks", 
    icon: <GoTasklist className="w-5 h-5" />,
  },
  
  {
    name: "Nueva tarea",
    path: "/tasks/new",
    icon: <MdAddTask className="" />,
  },
  {
    name: "Perfil",
    path: "/profile",
  },
  
];
