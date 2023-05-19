const BAD_REQUEST_STATUS = 400;

const isEmailFormatValid = (param) => {
  const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/);
  const valid = regex.test(param);
  return valid;
};

const isEmailValid = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "email" é obrigatório' },
    );
  }
  if (!isEmailFormatValid(email)) {
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O "email" deve ter o formato "email@email.com"' },
    );
  }
  next();
};

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;
  if (!password) { 
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "password" é obrigatório' },
    );
  }
  if (password.length < 6) {
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O "password" deve ter pelo menos 6 caracteres' },
    );    
  }
  next();
};

module.exports = {
  isEmailValid,
  isPasswordValid,
};