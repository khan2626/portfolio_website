const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection

connection.on('connected', ()=>{
    console.log('mongodb connection successful')
})

connection.on('error', (error)=>{
    console.error('mongodb connection failed: ', error)
})