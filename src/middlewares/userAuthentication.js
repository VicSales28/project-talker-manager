const UNAUTHORIZED_STATUS = 401;

const isAuthorized = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(UNAUTHORIZED_STATUS).json(
      { message: 'Token não encontrado' },
    );
  }
  if (typeof authorization !== 'string' || authorization.length !== 16) {
    return res.status(UNAUTHORIZED_STATUS).json(
      { message: 'Token inválido' },
    );
  }
  next();
};

module.exports = isAuthorized;