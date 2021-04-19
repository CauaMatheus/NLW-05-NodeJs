import express from 'express';

const app = express();

app.use(express.json());

/**
 * GET - Buscar informação.
 * POST - Criar informação.
 * PUT - Alterar informação.
 * PATCH - Alterar uma informação especifica.
 * DELETE - Excluir uma informação.
 */

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World!'
  });
});

app.post('/', (request, response) => {
  return response.json({
    message: 'Message Created :D'
  });
});

app.listen(3333, () => console.log('Server is running on port 3333'));
