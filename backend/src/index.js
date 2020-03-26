const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
/**
 * Metodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar uma informação no backend 
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma infromação no backend
 */

 /**
  * Tipos de parametros
  
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
    Route Params: Parâmetros utilizados para utilizar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */
app.use(routes);

app.listen(3333);