import express from "express";
import { createStudent } from "../controller/signup.controller.js";

const router = express.Router();

router.route('/').post(createStudent);

export default router;
