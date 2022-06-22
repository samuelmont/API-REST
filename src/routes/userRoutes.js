import { Router } from 'express';
import userController from '../controllers/UserController';// importa o UserController (uma funcão construtora)
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir (Nesse sistema, em outros possa ser necessario)
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista o usuário

router.post('/', loginRequired, userController.store); // Cria usuário
router.put('/', loginRequired, userController.update); // Atualiza o usuário
router.delete('/', loginRequired, userController.delete); // Deleta o usuário

export default router;

/*
Em cada controller podemos ter até 5 métodos sendo eles:
index => lista todos os usuários => GET
store/create => cria um novo usuário => POST
delete => apaga um usuário => DELETE
show => mostra um usuário => GET
update => atualiza um usuário => PATCH ou PUT
*/
