import { Router } from 'express';
import alunoController from '../controllers/AlunoController';// importa o AlunoController
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index); // Chama o método index do alunoController
router.post('/', loginRequired, alunoController.store); // Chama o método store do alunoController
router.put('/:id', loginRequired, alunoController.update); // Chama o método update do alunoController (Precisa ter o id para executar tal função)
router.get('/:id', alunoController.show); // Chama o método show do alunoController (Precisa ter o id para executar tal função)
router.delete('/:id', loginRequired, alunoController.delete); // Chama o método delete do alunoController (Precisa ter o id para executar tal função)

export default router;
