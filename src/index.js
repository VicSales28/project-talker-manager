const express = require('express');
const fs = require('fs').promises;

const readTalker = require('./utils/readTalker');
const generateToken = require('./utils/generateToken');
const { isEmailValid, isPasswordValid } = require('./middlewares/loginValidations');
const isAuthorized = require('./middlewares/userAuthentication');
const {
  isNameValid,
  isAgeValid,
  isTalkValid,
  isWatchedAtValid,
  isRateCompleted,
  isRateInsert,
} = require('./middlewares/talkerValidations');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const CREATED_STATUS = 201;
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

app.post('/login', isEmailValid, isPasswordValid, (req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

app.post('/talker',
  isAuthorized,
  isNameValid,
  isAgeValid,
  isTalkValid,
  isWatchedAtValid,
  isRateCompleted,
  isRateInsert,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const talkers = await readTalker();
    const newTalker = {
      id: talkers.length + 1,
      name,
      age,
      talk,
    };
    fs.writeFile('./src/talker.json', JSON.stringify([...talkers, newTalker]), 'utf-8');
    return res.status(CREATED_STATUS).json(newTalker);
  });

app.put('/talker/:id',
  isAuthorized,
  isNameValid,
  isAgeValid,
  isTalkValid,
  isWatchedAtValid,
  isRateCompleted,
  isRateInsert,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const talkers = await readTalker();
    const talkerIndex = talkers.findIndex(({ id }) => id === Number(req.params.id));
    if (talkerIndex === -1) {
      return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    }
    const updatedTalker = { ...talkers[talkerIndex], name, age, talk };
    talkers[talkerIndex] = updatedTalker;
    fs.writeFile('./src/talker.json', JSON.stringify(talkers), 'utf-8');
    return res.status(HTTP_OK_STATUS).json(updatedTalker);
  });

app.listen(PORT, () => {
  console.log('Online');
});
