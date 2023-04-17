const express = require("express");
const router = express.Router();
const deleteOneController = require("../controllers/deleteOneController.js");
router.post("/", deleteOneController.handleDeleteOneToDo);
module.exports = router;
