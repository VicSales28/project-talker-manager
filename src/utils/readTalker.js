const fs = require('fs').promises; // módulo que permite a leitura do arquivo
const { join } = require('path'); // join pertence ao módulo path e será usado direcionar ao caminho do arquivo

const filePath = '../talker.json';

async function readTalker() {
  try {
    const jsonData = await fs.readFile(join(__dirname, filePath), 'utf-8'); // leitura do arquivo
    const data = JSON.parse(data); // análise do conteúdo do arquivo JSON em um objeto JavaScript
    return data;
  } catch (err) {
    console.log(`Ocorreu o seguinte erro: ${err.message}`);
  }
}

module.exports = readTalker;
