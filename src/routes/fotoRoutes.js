import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';// importa o fotoController

const router = new Router();

router.post('/', loginRequired, fotoController.store); // Chama o método store da fotoController

export default router;
