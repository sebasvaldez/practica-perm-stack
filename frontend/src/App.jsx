
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  TaskForm,
  TasksPage,
  NotFound
} from "./pages";

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />


      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/tasks/new" element={<TaskForm />} />
      <Route path="/tasks/1/edit" element={<TaskForm />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
