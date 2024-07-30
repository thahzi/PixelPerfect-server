//import dotenv
require ('dotenv').config()

//import express
const express = require("express")

//import cors
const cors = require('cors')

// import multer
const multer = require('multer')


//import router from routes
const router = require('./routes')

require('./connection')

//creates an express application
const ppServer = express()

//use cros to communicate with the view
ppServer.use(cors())

//use express.json to retuen a middleware wch can parse json format
ppServer.use(express.json())

//use router
ppServer.use(router)

//set port for the server
PORT = 4010 || process.env.PORT

ppServer.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})

// get req
// ppServer.get('/', (req, res)=>{
//     res.send('get req reci')
// })

// ppServer.post('/', (req, res)=>{
//     res.send('get req reci')
// })


 
 

