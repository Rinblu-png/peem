import express from "express";

const app = express();
const PORT = 3030;
import studentRoutes from "./routes/student.route.js";
import courseRoutes from "./routes/course.route.js";

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});