const express = require("express");
const app = express();
const connnection = require("./db");
require("dotenv").config();
const moviesRouter = require("./routes/movieRoutes");
const seriesRouter = require("./routes/seriesRoutes");
const userRouter = require('./routes/userRoutes')
app.use(express.json());

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const date = new Date().getFullYear();
  console.log(method, url, date);
  next();
}

// app.set('view engine', 'ejs');

// app.use('/', './routes/web.js')

app.use(logger);
app.use('/users', userRouter);
app.use("/movies", moviesRouter);
app.use("/series", seriesRouter);

app.listen(4500, async () => {
  try {
    await connnection;
    console.log("Connected successfully with database.");
  } catch (err) {
    console.log("Failed to connnect with db", { error: err });
  }

  console.log("Server is running at port 4500");
});
