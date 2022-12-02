require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const todo = require("./routes/todo");

connectDB();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
//app.get("/", (req, res) => res.send("Server up and running"));
app.use("/api/todo", todo);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});