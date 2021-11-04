const { ObjectId } = require('mongodb');
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
};

const editTask = async (task, id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const dbConnection = await connection();
  await dbConnection.collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { $set: { task }});
  return { task, id }
};

const delTask = async (id) => {
  const dbConnection = await connection();
  await dbConnection.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return id;
};

module.exports = { registerTask, getAllTasks, editTask, delTask };
