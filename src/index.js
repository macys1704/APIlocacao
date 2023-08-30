import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import clienteController from './controller/clienteController.js';
import veiculoController from './controller/veiculoController.js'


let server = express();
server.use(cors());
server.use(express.json());

server.use(clienteController);
server.use(veiculoController);

server.listen(process.env.PORT, () => console.log('API subiu'));

