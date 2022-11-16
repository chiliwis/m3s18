const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const PORT = 3000;

let platillos = [
    { nombre: 'Tacos', precio: 50 },
    { nombre: 'Mole', precio: 100 }
];



server.get("/", (request, response) => {
    response.send("API V1.0");
});

server.get("/platillos", (request, response) => {
    response.json(
        {
            data: platillos,
            count: platillos.length,
            mensaje: "Platillos obtenidos correectamente"
        }
    );
});

server.post("/platillos", (request, response) => {
    response.json(
        {
            data: request.body,
            count: platillos.length,
            mensaje: "Entro a la funcion de agregar platillo"
        }
    );
});

server.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto 3000")
});