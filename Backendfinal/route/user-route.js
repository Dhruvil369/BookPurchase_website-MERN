import express from "express";
import { signup } from "../../backend/controller/user.controller";
import { login } from "../../backend/controller/user.controller";
const router = express.Router();

router.post("/signup", signup)
router.post("login", login)

export default router;