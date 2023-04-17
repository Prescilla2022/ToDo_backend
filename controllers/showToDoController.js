const ToDo = require("../model/ToDo");

const handleShowToDo = async (req, res) => {
  const toDoItems = await ToDo.find({});
  console.log(toDoItems);

  return await res.json(toDoItems);
};
module.exports = { handleShowToDo };
