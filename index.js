const express = require("express");
const cors = require("cors");

const app = express();

const file = require('./test.json')

app.use(cors());

const items = file;
app.get("/", (req, res) => {
  res.json(items);
});

app.listen(8080, () => console.log("Server is up!"));
