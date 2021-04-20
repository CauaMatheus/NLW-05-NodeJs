import express from 'express';
import 'reflect-metadata';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({
  message: 'Hello World!',
}));

app.post('/', (request, response) => response.json({
  message: 'Message Created :D',
}));

export { app };
