import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js"

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi API" });
});

app.use('/api',authRoutes);
app.use('/api',taskRoutes);





//Manejador de errores
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
