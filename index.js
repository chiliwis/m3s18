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
    let data_mapeada = platillos.map((platillo, index) => {
        return {index, ...platillo};
    });

    response.json(
        {
            // data: platillos,
            data: data_mapeada,
            count: platillos.length,
            mensaje: "Platillos obtenidos correectamente"
        }
    );
});

server.post("/platillos", (request, response) => {
    const platillo = request.body;
    if (!platillo.nombre) {
        return response.status(400).json({mensaje:"El platillo debe tener un nombre"});
    }
    platillos.push(platillo);
    response.json(
        {
            data: platillo,
            mensaje: "Entro a la funcion de agregar platillo"
        }
    );
});

server.put("/platillos/:index", (request, response) => {
   const {index} = request.params;
   const platillo = request.body;
   platillos[index] = platillo;
    response.json(
        {
            data: index,
            mensaje: "Se actualizo el platillo"
        }
    );
});

server.delete("/platillos/:index", (request, response) => {
    const {index} = request.params;
   platillos.splice(index,1);
     response.json(
         {
             data: index,
             mensaje: "Se elimino correctamente"
         }
     );
 });

server.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto 3000")
});