const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });
// dotenv.config({ path: "./.env" });

const authRouter = require("./routes/api/auth");
const news = require("./routes/api/news");
const alertsnews = require("./routes/api/alertsnews");
const mainnews = require("./routes/api/mainnews");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/news", news);
app.use("/api/alertsnews", alertsnews);
app.use("/api/mainnews", mainnews);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
