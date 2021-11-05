const taskService = require('../services/taskValidation');
const taskModel = require('../models/taskModel');

const OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;

const registerTask = async (req, res) => {
  const task = req.body;
  const registeredTask = await taskService.registerTaskValidation(task);

  if (!registeredTask) {
    return res.status(BAD_REQUEST).json({ message: 'Campos inválidos' });
  };

  return res.status(CREATED).json(registeredTask);
};

const getAllTasks = async (_req, res) => {
  const tasks = await taskModel.getAllTasks(); 

  if (!tasks) {
    return res.status(NOT_FOUND).json({ message: 'recipes not found' });
  }

  return res.status(OK).json(tasks);
}

const editTask = async (req, res) => {
  const { task } = req.body;
  const { id } = req.params;
  const { message } = await taskService.editTaskValidation(task, id);

  if (message) {
    return res.status(BAD_REQUEST).json({ message })
  }

  return res.status(OK).json({ _id: id, task })
};

const delTask = async (req, res) => {
  const { id } = req.params;
  const { message } = await taskService.delTaskValidation(id);

  if (message) {
    return res.status(BAD_REQUEST).json({ message });
  }

  return res.status(NO_CONTENT).json(id);
}

module.exports = { registerTask, getAllTasks, editTask, delTask };
