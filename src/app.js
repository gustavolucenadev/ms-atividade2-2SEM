const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");


mongoose
  .connect("mongodb://seu_usuario:sua_senha@localhost:27017/?authSource=admin")
  .then(() => {
    console.log("Conectado ao banco");
  })
  .catch((error) => {
    console.log(`Erro ao tentar conectar no mongo ${error}`);
  });


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


const index = require("./routes/index");

app.use("/", index);
module.exports = app;