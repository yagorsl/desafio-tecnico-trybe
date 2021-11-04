const { connection } = require('../models/connection');

const registerTask = async (task) => {
  const dbConnection = await connection();
  const { insertedId: id } = await dbConnection.collection('tasks').insertOne(task);
  return { task, id };
};

const getAllTasks = async () => {
  const dbConnection = await connection();
  const allRecipes = await dbConnection.collection('tasks')
    .find().toArray();
    return allRecipes;
}

module.exports = { registerTask, getAllTasks };
