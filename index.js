require("dotenv").config();
const db = require("./db/connection");
const express = require("express");
const jwt = require("jsonwebtoken");
const port = 3000;
const app = express();
const verifyToken = require("./middleware/auth");
const router=require("./routes/router")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Logic goes here

// importing user context
app.use(router)


app.listen(port, () => {
  console.log("Server is running on port 3000.");
});
