const ToDo = require("../model/ToDo");

const handleDeleteToDo = async (req, res) => {
  console.log(req.body);

  const result = await ToDo.deleteMany({});
  console.log(result);

  return res.status(201).json({ success: `All items deleted` });
};
module.exports = { handleDeleteToDo };
