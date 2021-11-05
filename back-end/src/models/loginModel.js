const { connection } = require('./connection');

const findUserByLogin = async ({ email, password }) => {
  const dbConnection = await connection();
  const userInfo = await dbConnection.collection('users').findOne({ email, password });
  return userInfo;
};

module.exports = {
  findUserByLogin,
};