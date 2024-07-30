//import express
const express =require('express')

//import userController file
const userController = require('./controlleer/userController')

//create an obj for router class
const router =new express.Router()

//set up path for each req from view

//register
router.post('`/register`',userController.registerController)

//login
router.post('/login',userController.loginController)

//upload imgs


//export the router
module.exports = router