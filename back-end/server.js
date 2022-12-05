require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/databaseConnection");
const todo = require("./routes/todo");

connectToDatabase();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use("/api/todo", todo);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});