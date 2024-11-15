const express = require("express");
const connection = require('./dbConfig/db.js')
const portfolioRoute = require('./routes/portfolioRoutes')
const dotenv = require('dotenv')
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from your frontend
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify allowed HTTP methods
  res.setHeader('Access-Control-Allow-Headers', '*'); // Specify allowed headers
  next();
});
app.use('/portfolio_data', portfolioRoute)

app.listen(PORT, () => {
  try {
    console.log(`server running in port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
