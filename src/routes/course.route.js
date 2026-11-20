import express from "express";
const app = express.Router();

import { getAllCourses, createCourse, deleteCourse } from "../controllers/course.controller.js";

app.get("/", getAllCourses);
app.post("/", createCourse);
app.delete("/1", deleteCourse);

export default app;