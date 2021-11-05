const loginModel = require('../models/loginModel');

const loginFieldsValidation = (email, password) => {
  if (!email || !password) {
    return false
  }
  return true;
};

const emailFormatValidation = (email) => {
  const regexEmail = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/;
  if (!regexEmail.test(email)) {
    return false;
  }
  return true;
};

const passwordValidation = (user, filledPassword) => {
  if (!user) {
    return false;
  }

  const { password } = user;
  if (password !== filledPassword) {
    return false;
  }

  return true;
};

const findUserByLoginValidation = async ({ email, password }) => {
  const validLoginFields = loginFieldsValidation(email, password);
  const validEmail = emailFormatValidation(email);

  if (!validLoginFields) {
    return { message: 'All fields must be filled' };
  }

  const login = await loginModel.findUserByLogin({ email, password });
  const validPassword = passwordValidation(login, password);

  if (!validPassword || !validEmail) {
    return { message: 'Incorrect email or password' };
  }

  return login;
};

module.exports = { findUserByLoginValidation };
