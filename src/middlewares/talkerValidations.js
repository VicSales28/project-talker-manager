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

const isTalkValid = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) { 
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "talk" é obrigatório' },
    );
  }
  next();
};

const validateDateFormat = (param) => {
  const regex = new RegExp(/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/);
  const valid = regex.test(param);
  return valid;
};

const isWatchedAtValid = (req, res, next) => {
  const { talk } = req.body;
  if (!talk.watchedAt) {
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "watchedAt" é obrigatório' },
    );    
  }
  if (!validateDateFormat(talk.watchedAt)) {
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
    );
  }
  next();
};

const isRateCompleted = (req, res, next) => {
  const { talk } = req.body;
  if (!talk.rate && talk.rate !== 0) {
    return res.status(BAD_REQUEST_STATUS).json(
      { message: 'O campo "rate" é obrigatório' },
    );
  } 
  next();
};

const isRateInsert = (req, res, next) => {
  const { talk } = req.body;
  if (!Number.isInteger(talk.rate) || (talk.rate < 1 || talk.rate > 5)) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
  next();
};

module.exports = {
  isNameValid,
  isAgeValid,
  isTalkValid,
  isWatchedAtValid,
  isRateCompleted,
  isRateInsert,
};