import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' '); // Separa a palavra Bearer do token pelo espaço

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    // dados é um objeto tipo esse { id: 9, email: 'joao@novo.com', iat: 1655761096, exp: 1656365896 }

    console.log(dados);
    const { id, email } = dados; // { destructuring } tirando id e email do objeto dados

    const user = await User.findOne({
      where: {
        id, // checka se o id é igual á id
        email, // checka se o email é igual á email
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
