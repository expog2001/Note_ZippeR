const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddlewares");

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });
app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Server started on PORT ${PORT}`);
});
