import express from "express";
import { checkStudent } from "../controller/signin.controller.js";

const router = express.Router();

router.route('/',).post(checkStudent);

export default router;