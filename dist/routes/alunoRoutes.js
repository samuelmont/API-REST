"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);// importa o AlunoController
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _AlunoController2.default.index); // Chama o método index do alunoController
router.post('/', _loginRequired2.default, _AlunoController2.default.store); // Chama o método store do alunoController
router.put('/:id', _loginRequired2.default, _AlunoController2.default.update); // Chama o método update do alunoController (Precisa ter o id para executar tal função)
router.get('/:id', _AlunoController2.default.show); // Chama o método show do alunoController (Precisa ter o id para executar tal função)
router.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete); // Chama o método delete do alunoController (Precisa ter o id para executar tal função)

exports. default = router;
