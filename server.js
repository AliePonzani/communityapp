const express = require('express');

const server = express();

server.use(express.json())

const validaDados= [{
    usuario: "usuario_1@teste.com",
    senha: "123456"
}];

server.get('/', (req, res) => {
    return res.json(validaDados);
})

server.post('/', (req, res) => {
    const {novoUsuario} = req.body;
    validaDados.push(novoUsuario);
    return res.json(validaDados);
})

server.get('/:indiceInput', (req, res) => {
    const { indiceInput } = req.params;
    return res.json(validaDados[indiceInput]);
})

server.put('/:indice', (req, res) => {
    const { indice } = req.params;
    const {novoUsuario} = req.body;

    validaDados[indice]=novoUsuario;

    return res.json(validaDados);
})

server.delete('/:indice', (req, res) => {
    const { indice } = req.params;
    validaDados.splice(indice,1);
    return res.json(validaDados);
})

server.listen(3333);