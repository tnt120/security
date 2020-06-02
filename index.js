const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const file = require('./test.json')

app.use(cors());
app.use(bodyParser());

app.post("/", (req, res) => {
  console.log(req.body);
  res.end(JSON.stringify(req.body));
})

const items = file;
app.get("/", (req, res) => {
  res.json(items);
});

app.listen(8080, () => console.log("Server is up!"));
