const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const file = require('./test.json')

app.use(cors());
app.use(bodyParser());

app.post("/scan/:name", (req, res) => {
  const errors = [
    'img1',
    'img79'
  ]
  const check = name => errors.find(item => item === name) ? false : true

  res.json(req.body.map(({ name }) => ({
    name,
    send: check(name),
    type: req.params.name
  })))

})

const items = file;
app.get("/", (req, res) => {
  res.json(items);
});

app.listen(8080, () => console.log("Server is up!"));