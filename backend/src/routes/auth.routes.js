import Router from "express-promise-router";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import {
  getProfile,
  login,
  logOut,
  register,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", validateSchema(loginSchema), login);

router.post("/register", validateSchema(registerSchema), register);

router.post("/logout", logOut);

router.get("/profile", isAuth, getProfile);

export default router;
