const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "sample api"
  })
})

app.post("/", (req, res) => {
  const user = {
    id: 1,
    name: "nancy",
    email: "nancy@gmail.com",
    password: "1234"
  }
})

app.listen(5000, () => {
  console.log("running on 5000")
})