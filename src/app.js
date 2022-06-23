import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes); // Rota da home
    this.app.use('/users/', userRoutes); // Rota do user
    this.app.use('/tokens/', tokenRoutes); // Rota dos tokens
    this.app.use('/alunos/', alunoRoutes); // Rota dos alunos
    this.app.use('/fotos/', fotoRoutes); // Rota do foto
  }
}

export default new App().app;
