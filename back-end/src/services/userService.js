const userModel = require('../models/userModel');

const nameValidation = (name) => {
  if (!name) {
    return false;
  }
  return true;
};

const emailValidation = (email) => {
  const regexEmail = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/;
  if (!email || !regexEmail.test(email)) {
    return false;
  }

  return true;
};

const passwordValidation = (password) => {
  if (password.length < 6) {
    return false;
  }
  return true;
}

const createUserValidation = async ({ name, email, password}) => {
  const validatedName = nameValidation(name);
  const validatedEmail = emailValidation(email);
  const validatedPassword = passwordValidation(password);

  if (!validatedName) {
    return { message: '"name" is not allowed to be empty'};
  }

  if (!validatedEmail) {
    return { message: 'Invalid entries. Try again' };
  }

  if (!validatedPassword) {
    return { message: '"password" must be at least 6 characters' };
  }

  const existsEmail = userModel.findUserByEmail(email);
  if (!existsEmail) {
    return { message: 'Email already registered' };
  }

  const createdUser = await userModel.createUser({ name, email, password });

  return createdUser;
};

module.exports = {
  createUserValidation,
}