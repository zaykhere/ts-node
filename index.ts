import express from "express";
import remindersRouter from "./routers/reminders";

const app = express();
app.use(express.json());

app.use("/reminders", remindersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));