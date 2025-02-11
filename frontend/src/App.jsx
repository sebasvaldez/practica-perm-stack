import { Routes, Route, Outlet } from "react-router-dom";
import {
  AboutPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  TaskFormPage,
  TasksPage,
  NotFound,
} from "./pages";
import { Navbar } from "./components/navbar/Navbar";
import { Container } from "./components/ui";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useAuth } from "./hooks/useAuth";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  const { isAuth } = useAuth();

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route
            element={
              <ProtectedRoutes isAllowed={!isAuth} redirectTo="/tasks" />
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route
            element={<ProtectedRoutes isAllowed={isAuth} redirectTo="/login" />}
          >
            <Route
              element={
                <TaskProvider>
                  <Outlet />
                </TaskProvider>
              }
            >
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/tasks/new" element={<TaskFormPage />} />
              <Route path="/tasks/:id/edit" element={<TaskFormPage />} />
            </Route>

            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
