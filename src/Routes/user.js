const express = require('express')

const router = express.Router(); 
const userController = require('../Controllers/user_controller') //book controller

router.get("/", userController.getUser)
router.post("/", userController.registerUser)

module.exports = router;