const express = require("express");
const router = express.Router();
const deleteToDoController = require("../controllers/deleteToDoController.js");
router.post("/", deleteToDoController.handleDeleteToDo);
module.exports = router;
