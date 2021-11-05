const userService = require('../services/userService');

const CREATED = 201;
const BAD_REQUEST = 400;
const CONFLICT = 409;

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const { id, message } = await userService.createUserValidation({ name, email, password });

  if (message === '"name" is not allowed to be empty') {
    return res.status(BAD_REQUEST).json({ message });
  }

  if (message === 'Invalid entries. Try again') {
    return res.status(BAD_REQUEST).json({ message });
  }

  if (message === '"password" must be at least 6 characters') {
    return res.status(BAD_REQUEST).json({ message });
  }

  if (message === 'Email already registered') {
    return res.status(CONFLICT).json({ message });
  }

  return res.status(CREATED).json({ user: {_id: id, name, email } });
};

module.exports = { createUser };