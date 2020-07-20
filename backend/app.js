const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const propertysRoutes = require("./routes/posts");
const EmailController = require("./controllers/email");

const app = express();


mongoose
  .connect(
    "mongodb+srv://erid:" + process.env.MONGO_ATLAS_PW + "@cluster0-ambpl.mongodb.net/node-angular?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Conection to database failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));
app.use("/", express.static(path.join(__dirname,"aja-angular")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/email", EmailController.sendEmail);
app.use("/api/user", userRoutes);
app.use("/api/propertys", propertysRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname,"aja-angular", "index.html"));
});

module.exports = app;
