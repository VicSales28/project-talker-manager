# Talker Manager 🗣️

My first project using Node.js with Express to build REST APIs.

This project was developed while I was studying 'Introduction to development using NodeJS' at Trybe Programming School.

In this project I developed an application for registration of talkers (speakers). By using it, it's possible to register, view, search, edit and delete information.

Regular deadline: May 25, 2023 at 2:00 pm


<details>
  <summary><strong>🏗 Project structure</strong></summary><br />

The files created by me are in the folder `src`. 📁

The created endpoints are in the `index.js` file:
- GET /talker
- GET /talker/:id
- POST /login
- POST /talker
- PUT /talker/:id
- DELETE /talker/:id

The validations for the endpoints are in the `middlewares` folder. 📁

And the developed auxiliary functions are in the `utils` folder. 📁

</details>

<details>
  <summary><strong>🗒️ Skills</strong></summary><br />

The set of operations known as CRUD (Create, Read, Update and Delete) constitute the most basic way of manipulating data. Most of the market applications revolve around these four operations. In this project, I implemented these operations using Node.js, express and the fs module.

</details>

<details>
  <summary><strong>🔎 Linter</strong></summary><br />

To ensure code quality, the `ESLint` and `Stylelint` linters were used in this project.

ESLint is a tool for identifying and reporting patterns found in ECMAScript/JavaScript code. In many ways it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses Espree for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely 'pluggable', each of the rules is a plugin and you can add […]

To run them locally, run the commands below:
`npm run lint`
`npm run lint:styles`

</details>

<details>
  <summary><strong>🖥️ To access</strong></summary><br />

1 - Clone the repository:
`git clone git@github.com:VicSales28/project-talker-manager.git`

2 - Enter the repository folder you just cloned.

You must be using node version 16 (or higher).

To check your version, use the command:
`nvm --version`

<details>
  <summary><strong>Trybe Evaluator Initialization</strong></summary><br />
  
Quickstart with Docker Compose 🐳

```bash
# em um terminal, inicie os containers
docker-compose up -d

# acesse o terminal do container inicie a aplicação
docker exec -it talker_manager bash
npm start
# ou para iniciar com live-reload
npm run dev

# em outro terminal, rode os testes
docker exec -it talker_manager bash
npm run lint # roda a verificação do linter
npm test # roda todos os testes
npm test 01 # rodando apenas o teste do requisito 01
```

or

Quickstart without Docker Compose

```bash
# em um terminal, inicie a aplicação no container
npm install
env $(cat .env) npm start
# ou para iniciar com live-reload
env $(cat .env) npm run dev

# em outro terminal, rode os testes
npm run lint # roda a verificação do linter
env $(cat .env) npm test # roda todos os testes
env $(cat .env) npm test 01 # rodando apenas o teste do requisito 01
```
</details>

</details>

<details>
  <summary><strong>🗣 Feedbacks</strong></summary><br />
  
_Give me feedbacks, I'm open to new ideas_ 😉

</details>
