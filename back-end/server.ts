import express from "express";
import cors from "cors";
import { connectToDatabase }from "./config/databaseConnection";
import { router } from "./routes/task";

connectToDatabase();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});