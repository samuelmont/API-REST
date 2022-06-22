import { Router } from 'express';
import tokenController from '../controllers/TokenController';// importa o TokenController

const router = new Router();

router.post('/', tokenController.store); // Chama o método store da tokenController

export default router;
