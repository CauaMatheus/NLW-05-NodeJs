import { AppError } from '@errors/AppError';
import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import 'reflect-metadata';
import createConnection from '../typeorm';
import { router } from './routes';

import '@shared/container';

createConnection();

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, nextFunction: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.status).json({ message: err.message });
  }
  return response.status(500).json({ message: err.message });
});

export { app };
