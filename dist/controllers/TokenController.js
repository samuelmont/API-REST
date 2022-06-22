"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async store(req, res) {
    // tira do req.body o email e a password
    const { email = '', password = '' } = req.body; // req.body é porque iremos fornecer esses dados no body da pagina

    if (!email || !password) { // Se não tiver email ou senha retornará um erro
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await _User2.default.findOne({ where: { email } });

    if (!user) { // se não possuir um usuário com esse email retornará um erro
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    if (!(await user.passwordIsValid(password))) { // a senha passara no método do User.js que compara a senha em hash com a senha que foi fornecida
      return res.status(401).json({ // se não for igual retornará um erro
        errors: ['Senha inválida'],
      });
    }

    const { id } = user; // detructuring pegando id do user
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, { // esse token retorna um token
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

exports. default = new TokenController();
