const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const url = process.env.MONGODB_URL

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection

connection.on('connected', ()=>{
    console.log('mongodb connection successful')
})

connection.on('error', (error)=>{
    console.error('mongodb connection failed: ', error)
})