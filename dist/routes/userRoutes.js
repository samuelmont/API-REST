"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);// importa o UserController (uma funcão construtora)
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir (Nesse sistema, em outros possa ser necessario)
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista o usuário

router.post('/', _loginRequired2.default, _UserController2.default.store); // Cria usuário
router.put('/', _loginRequired2.default, _UserController2.default.update); // Atualiza o usuário
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // Deleta o usuário

exports. default = router;

/*
Em cada controller podemos ter até 5 métodos sendo eles:
index => lista todos os usuários => GET
store/create => cria um novo usuário => POST
delete => apaga um usuário => DELETE
show => mostra um usuário => GET
update => atualiza um usuário => PATCH ou PUT
*/
