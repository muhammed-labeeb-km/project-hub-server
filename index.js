// Load .env file contents into process.env
require('dotenv').config()

//connection mongoose
require('./DB/connection')

const express = require('express')
const cors = require('cors')

//import router
const router = require('./Routes/router')

//express server
const pfServer = express()

//use cors
pfServer.use(cors())

//use json parse
pfServer.use(express.json())

//use router
pfServer.use(router)

//
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3010 || process.env.PORT

//to listen
pfServer.listen(PORT,()=>{
    console.log(`Project server is running fine at ${PORT}`);
})


//to resolve get http request to localhost:3010
pfServer.get('/',(req,res)=>{
    res.send('<h1 style=color:grey > Project`s server is running at 3010 </h1>')  
})

