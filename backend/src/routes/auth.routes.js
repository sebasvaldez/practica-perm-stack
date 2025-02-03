import Router from "express-promise-router";

import {
  getProfile,
  login,
  logOut,
  register,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", login);

router.post("/register", register);

router.post("/logout", logOut);

router.get("/profile",isAuth, getProfile);

export default router;
