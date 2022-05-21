const mongoose = require("mongoose");
const app = require("../app");

// const { DB_HOST, PORT = 3000 } = process.env;
// const DB_HOST = process.env.MONGODB_URI;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connect"))
  .catch((ошибка) => console.log(ошибка));
