import express, { Router } from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videosRouter from "./routers/videoRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videosRouter);

const handleListening = () => console.log(`Server listening on http://localhost:${PORT}/`);

app.listen(4000, handleListening);