const todoModel = require("./../../db/models/todo");


//Add task
const addTask = (req, res) => {
    const { name } = req.body;
    const newTask = new todoModel({
      name,
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
      if (result.length > 0) {
      console.log(result);
      res.status(200).json(result);
      } else {
        res.status(404).json("There is no tasks" );

      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


const TasksByid = (req, res) => {
  const { id } = req.body
  todoModel
  .find({_id: id  , user: req.token.id })
  .then((result) => {
    if (result) {
    console.log(result);
    res.status(200).json(result);
    } else {
      res.status(404).json("There is no tasks" );

    }
  })
  .catch((err) => {
    res.status(400).json(err);
  });
};




// update task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  todoModel
    .findByIdAndUpdate({_id: id, isDel: false},
      {$set: { name: name}}
    )
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
      { _id: id, isDel: false },
      { $set: {isDel: true }})
    .then((result) => {
      if (result) {
        res.status(201).send(result);
      } else {
        res.status(404).send("not found");
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
  TasksByid,
  deleteTask,
  delateTaskAdmin
};