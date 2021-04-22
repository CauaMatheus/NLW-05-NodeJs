import { AppError } from '@errors/AppError';
import express, {
  NextFunction, Request, Response,
} from 'express';
import { createServer } from 'http';
import { resolve, join } from 'path';
import { Server, Socket } from 'socket.io';

import 'express-async-errors';
import 'reflect-metadata';

import createConnection from '../typeorm';
import { router } from './routes';
import '@shared/container';

createConnection();

const app = express();

app.use(express.static(resolve(__dirname, '..', '..', '..', '..', 'public')));
app.set('views', join(__dirname, '..', '..', '..', '..', 'public'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.get('/pages/client', (request, response) => response.render('html/client.html'));

const http = createServer(app); // Criando protocolo Http
const io = new Server(http); // Criando protocolo WS

io.on('connection', (socket: Socket) => {
  console.log('Se conectou', socket.id);
});

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, nextFunction: NextFunction) => { // eslint-disable-line
  if (err instanceof AppError) {
    return response.status(err.status).json({ message: err.message });
  }
  return response.status(500).json({ message: err.message });
});

export { http, io };
