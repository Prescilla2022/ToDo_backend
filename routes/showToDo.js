const express = require("express");
const router = express.Router();
const showToDoController = require("../controllers/showToDoController.js");
router.post("/", showToDoController.handleShowToDo);
module.exports = router;
