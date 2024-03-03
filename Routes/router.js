const express = require('express')
const userController = require('../controller/userController')
const projectController = require('../controller/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMidlleware')

const router = new express.Router()

//register api
router.post('/register',userController.register)

//login api
router.post('/login',userController.login)

//projectAdd API - router specific middleware
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)


//get home project api
router.get('/get-home-project',projectController.getHomeProjects)

//add all api - required autherization
router.get('/get-all-project',jwtMiddleware,projectController.getAllProjects)

//add user api - required autherization
router.get('/get-user-project',jwtMiddleware,projectController.getUserProjects)

//update User
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImages"),userController.editUser)

//remove projects
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)

//update project
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)


//exportting router
module.exports = router