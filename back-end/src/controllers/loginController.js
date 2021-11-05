const loginService = require('../services/loginService');

const OK = 200;
const UNAUTHORIZED = 401;

const findUserByLogin = async (req, res) => {
  const { email, password } = req.body;
  const { message } = await loginService.findUserByLoginValidation({ email, password });

  if (message) {
    return res.status(UNAUTHORIZED).json({ message });
  }

  return res.status(OK).json({ message: "You're in"});
};

module.exports = { findUserByLogin };
