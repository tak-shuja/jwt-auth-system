import express from "express";
import userRouter from "./routes/userRouter.js";

import "../src/db/initDb.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

export default app;
