const BAD_REQUEST_STATUS = 400;

const isNameValid = (req, res, next) => {
  const { name } = req.body;
  if (!name) { 
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "name" é obrigatório' },
    );
  }
  if (name.length < 3) {
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O "name" deve ter pelo menos 3 caracteres' },
    );    
  }
  next();
};

const isAgeValid = (req, res, next) => {
  const { age } = req.body;
  if (!age) { 
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "age" é obrigatório' },
    );
  }
  if (!Number.isInteger(age) || age < 18) {
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' },
    );    
  }
  next();
};

module.exports = {
  isNameValid,
  isAgeValid,
};