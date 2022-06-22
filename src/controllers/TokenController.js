import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    // tira do req.body o email e a password
    const { email = '', password = '' } = req.body; // req.body é porque iremos fornecer esses dados no body da pagina

    if (!email || !password) { // Se não tiver email ou senha retornará um erro
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

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
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, { // esse token retorna um token
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
