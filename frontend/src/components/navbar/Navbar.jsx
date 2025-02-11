import { Link, useLocation } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigation";
import { Container } from "../ui";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const location = useLocation();
  const { isAuth, logOut } = useAuth();
  return (
    <nav className="bg-zinc-950 ">
      <Container className={"flex justify-between py-3"}>
        <Link to={"/"}>
          <h1 className="font-bold text-2xl">PERN TASKS</h1>
        </Link>

        <ul className="flex gap-x-2">
          {isAuth
            ? privateRoutes.map(({ path, name }) => {
                return (
                  <li
                    key={path}
                    className={`px-3  py-1 ${
                      location.pathname === path && "bg-sky-500  rounded-md"
                    }`}
                  >
                    <Link to={path}>{name}</Link>
                  </li>
                );
              })
            : publicRoutes.map(({ path, name }) => {
                return (
                  <li
                    key={path}
                    className={`px-3  py-1 ${
                      location.pathname === path && "bg-sky-500  rounded-md"
                    }`}
                  >
                    <Link to={path}>{name}</Link>
                  </li>
                );
              })}
          {isAuth && (
            <li
            className={`px-3  py-1 `}
              onClick={() => {
                logOut();
              }}
            >
              <Link>
              Logout
              </Link>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  );
};
