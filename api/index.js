const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.static('public')); // permite acesso à pasta 'public'

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'view'));

app.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Sistema Teste',
    mensagem: 'Aplicacao rodando',
    data: new Date().toLocaleString('pt-BR')
  });
});

app.get('/pagina2', (req, res) => {
  res.render('pagina2', {
    titulo: 'Sistema Teste',
    mensagem: 'Aplicacao rodando',
    data: new Date().toLocaleString('pt-BR')
  });
});

if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Servidor local rodando em http://localhost:${port}`);
  });
}

module.exports = app;
