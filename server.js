const express = require("express");
const connection = require('./dbConfig/db.js')

const dotenv = require('dotenv')
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGODB_URL)


app.listen(PORT, () => {
  try {
    console.log(`server running in port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
