const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (request, response) => {
    response.send("API V1.0");
});

server.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000")
});