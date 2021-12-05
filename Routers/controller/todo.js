const todoModel = require("./../../db/models/todo");


//Add task
const addTask = (req, res) => {
    const { task } = req.body;
  
    const newTask = new todoModel({
        task,
      user: req.token.id,
    });
  
    newTask
      .save()
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  };

  
// 
const allTasks = (req, res) => {
    todoModel
    .find({isDel: false , user: req.token.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};



// update task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { task, isDel } = req.body;

  todoModel
    .findByIdAndUpdate(id, 
        { task, isDel }, 
        { new: true })
    .exec()
    .then((result) => {
      if (result) {
        res.status(201).send(result);
      } else {
        res.status(404).send("error");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// delete task
const deleteTask = (req, res) => {
  const { id } = req.params;
  todoModel
    .findOneAndUpdate(
      { id, user: req.token.id, isDel: { $eq: false } },
      { isDel: true },
      { new: true }).exec()
    .then((result) => {
      if (result) {
        res.status(201).send(result);
      } else {
        res.status(404).send("Deleted");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};


// delete by admin
const delateTaskAdmin = (req, res) => {
    todoModel
    .find({ isDel: { $eq: false } })
    .exec()
    .then((result) => {
      if (result) {
        res.status(201).send(result);
      } else {
        res.status(404).send("no task found");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
    addTask,
    allTasks,
  updateTask,
  deleteTask,
  delateTaskAdmin
};