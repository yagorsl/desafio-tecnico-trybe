const { connection } = require('./connection');

const createUser = async ({ name, email, password }) => {
  const dbConnection = await connection();
  const { insertedId: id } = await dbConnection.collection('users')
    .insertOne({ name, email, password });
  return { id, name, email, password };
};

const findUserByEmail = async (email) => {
  const dbConnection = await connection();
  const foundByEmail = await dbConnection.collection('users')
    .findOne({ email });
  return foundByEmail;
}

module.exports = { createUser, findUserByEmail };
