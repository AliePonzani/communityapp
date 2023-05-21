const express = require('express');

const server = express();

const arrayteste = ['teste 1', 'teste 2', 'teste 3']

server.get('/CadastroMorador', (req, res)=>{
    return res.json(arrayteste);
})

server.listen(5000);