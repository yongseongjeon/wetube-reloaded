import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("I love middlewares.");
}

const handleLogin = (req, res) => {
  return res.send("This is login.");
}

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on http://localhost:${PORT}/`);

app.listen(4000, handleListening);