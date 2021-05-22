const express = require('express')

const router = express.Router(); 
const bookController = require('../Controllers/book_controller') //book controller

router.get("/", bookController.getbook)
router.post("/", bookController.uploadbook)

module.exports = router;