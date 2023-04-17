const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secreteKey = "secretKey";

app.get("/", (req, res) => {
  res.json({
    message: "sample api"
  })
})

app.post("/", (req, res) => {
  const user = {
    id: 1,
    name: "admin",
    email: "nancy@gmail.com",
    password: "1234"
  }
  jwt.sign({ user }, secreteKey, { expiresIn: '500s' }, (err, token) => {//details(here userDetails , secret key , expiration time)
    res.json({ user, token });
  })
})

app.post("/profile", verify, (req, res) => {
  jwt.verify(req.token, secreteKey, (err, authData) => {
    if (err) {
      res.send({ result: "Invalid token" })
    } else {
      res.json({
        messgae: "Profile accessed",
        authData
      })
    }
  })
})

//getting he token
function verify(req, res, next) {
  const bearerHeader = req.headers.Authorization || req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  }
  else {
    res.send({
      result: 'Token is not valid'
    })
  }
}

app.listen(5000, () => {
  console.log("running on 5000")
})