const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const items = [
  { name: "item0", value: 0, type: null },
  { name: "item1", value: 1, type: null },
  { name: "item2", value: 2, type: null },
  { name: "item3", value: 3, type: null },
  { name: "item4", value: 4, type: null },
  { name: "item5", value: 5, type: null },
  { name: "item6", value: 6, type: null },
  { name: "item7", value: 7, type: null },
  { name: "item8", value: 8, type: null },
  { name: "item9", value: 9, type: null },
  { name: "item10", value: 10, type: null },
  { name: "item11", value: 11, type: null },
  { name: "item12", value: 12, type: null },
  { name: "item13", value: 13, type: null },
  { name: "item14", value: 14, type: null },
  { name: "item15", value: 15, type: null },
  { name: "item16", value: 16, type: null },
  { name: "item17", value: 17, type: null },
  { name: "item18", value: 18, type: null },
  { name: "item19", value: 19, type: null },
  { name: "item20", value: 20, type: null },
  { name: "item21", value: 21, type: null },
  { name: "item22", value: 22, type: null },
  { name: "item23", value: 23, type: null },
  { name: "item24", value: 24, type: null },
  { name: "item25", value: 25, type: null },
  { name: "item26", value: 26, type: null },
  { name: "item27", value: 27, type: null },
  { name: "item28", value: 28, type: null },
  { name: "item29", value: 29, type: null },
];

app.get("/", (req, res) => {
  res.json(items);
});

app.listen(8080, () => console.log("Server is up!"));
