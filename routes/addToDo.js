const express = require("express");
const router = express.Router();
const addToDoController = require("../controllers/addToDoController.js");
router.post("/", addToDoController.handleAddToDo);
module.exports = router;
