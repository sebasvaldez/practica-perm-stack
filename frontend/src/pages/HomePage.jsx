import { useAuth } from "../hooks/useAuth";
import { Card } from "../components/ui/Card";

export const HomePage = () => {
  const { user, loading } = useAuth();

  return (
    <div className="flex">
      <Card>
        <h1 className="text-3xl font-bold my4">Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          minima facere cupiditate quas deserunt neque excepturi ab, quidem
          tempora repellendus voluptatibus vero voluptatem sed. Necessitatibus
          odit eligendi commodi qui eos!
        </p>
      </Card>
    </div>
  );
};
