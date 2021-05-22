const express = require('express')

const router = express.Router(); 
const borrowerController = require('../Controllers/borrow_controller') //book controller

router.get("/", borrowerController.borrow)
router.post("/", borrowerController.borrowedrecord)

module.exports = router;