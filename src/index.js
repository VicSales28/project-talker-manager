const express = require('express');

const readTalker = require('./utils/readTalker');
const generateToken = require('./utils/generateToken');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const UNAUTHORIZED_STATUS = 401;
const NOT_FOUND_STATUS = 404;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  const talkers = await readTalker();
  res.status(HTTP_OK_STATUS).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readTalker();
  const talker = talkers.find((obj) => obj.id === Number(id));

  if (!talker) {
    return res.status(NOT_FOUND_STATUS).send({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_OK_STATUS).json(talker);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if ([email, password].includes(undefined)) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Campos ausentes' });
  }
  const token = generateToken();
  return res.status(HTTP_OK_STATUS).json({ token });
});

app.listen(PORT, () => {
  console.log('Online');
});
