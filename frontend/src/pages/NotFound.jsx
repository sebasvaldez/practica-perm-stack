import { Link } from "react-router-dom";
import { Card } from "../components/ui";
export const NotFound = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center flex-col">
      <Card>
        <h1 className="text-4xl font-bold my-2">Pagina no encontrada</h1>
        <h3 className="text-2xl">404</h3>

        <Link to="/">Volver al inicio</Link>
      </Card>
    </div>
  );
};
