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
};

const editTaskValidation = async (task, id) => {
  const updatedTask = await taskModel.editTask(task, id);

  if (!updatedTask) {
    return { message: 'task not found' };
  }

  return (task, id );
};

const delTaskValidation = async (id) => {
  const taskToDelete = await taskModel.delTask(id);

  if (!taskToDelete) {
    return { message: 'task not found' }
  }

  return taskToDelete;
}



module.exports = { registerTaskValidation, editTaskValidation, delTaskValidation };
