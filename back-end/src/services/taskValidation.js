const taskModel = require('../models/taskModel');

const taskValidation = (task) => {
 if (!task) {
   return false;
 }

 return true;
};

const registerTaskValidation = async ({ task }) => {
  const validatedTask = taskValidation(task);

  if (!validatedTask) {
    return { message: '"task" is not allowed to be empty' };
  }

  const { id } = await taskModel.registerTask({ task });
  return { task, id };
}

module.exports = { registerTaskValidation };
