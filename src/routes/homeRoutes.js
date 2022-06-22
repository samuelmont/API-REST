import { Router } from 'express';
import homeController from '../controllers/HomeController';// importa o homeController

const router = new Router();

router.get('/', homeController.index); // Chama o método index da homeController

export default router;
