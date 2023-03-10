const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'clientes'
});

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
con.connect(function(err) {
  if (err) {
    console.error('Erro ao conectar: ' + err.stack);
    return;
  }
  console.log('Conexão estabelecida');
});

app.get('/api/data', function (req, res) {
  
  con.query('SELECT * FROM cadastro', function (error, results, fields) {
    if (error) throw error;
    console.log("Resultado previsto")
    res.send(results);
  });
});

app.post('/api/data', function (req, res) {
    
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const senha = req.body.senha;
  
    
    con.query(
      'INSERT INTO cadastro (nome, email, telefone, senha) VALUES (?, ?, ?, ?)',
      [nome, email, telefone, senha],
      function (error, results) {
        if (error) throw error;
        console.log("Registro criado com sucesso!");
        res.send("Registro criado com sucesso!");
      }
    );
  });

app.listen(4000, () => {
  console.log('Servidor foi iniciado na porta 4000: http://localhost:4000');
});

