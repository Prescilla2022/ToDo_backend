const ToDo = require("../model/ToDo");

const handleDeleteOneToDo = async (req, res) => {
  const { item } = req.body;
  console.log(item);

  const result = await ToDo.deleteOne({ item: item });
  console.log(result);

  return res.status(201).json({ success: `Item deleted` });
};
module.exports = { handleDeleteOneToDo };
