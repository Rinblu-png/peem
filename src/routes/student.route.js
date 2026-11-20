import express from "express";
const app = express.Router();
import {createStudent, getAllstudents, getStudentID1, patchStudentID1, updateStudentID1} from "../controllers/student.controller.js"

app.get("/" , getAllstudents);
app.get("/1" , getStudentID1);

app.post("/" , createStudent);

app.put("/1" , updateStudentID1);

app.patch("/1" , patchStudentID1);
export default app;