const ToDo = require("../model/ToDo");

const handleAddToDo = async (req, res) => {
  console.log(req.body);
  const { todo } = req.body;

  const newItem = new ToDo({ item: todo });
  const result = await newItem.save();
  console.log(result);

  return res.status(201).json({ success: `New Item created ` });
};
module.exports = { handleAddToDo };
