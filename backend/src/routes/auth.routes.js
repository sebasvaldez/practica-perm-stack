import express from 'express';
import { getProfile, login, logOut, register } from "../controllers/auth.controller.js"

const router = express.Router();

router.post('/login', login);


router.post('/register',register );

router.post('/logout', logOut);

router.get('/profile', getProfile)


export default router;