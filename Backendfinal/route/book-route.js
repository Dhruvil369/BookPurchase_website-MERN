import express from "express";
import { getbook } from "../Apis/BookAPI";
const route = express.Router();

route.get("/", getbook)
export default router;