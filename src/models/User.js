import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255], // Validação por tamanho
            msg: 'Campo nome deve ter entre 3 e 255 caracteres', // Mensagem caso não não passe pela validação
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: { // Validação se for email
            msg: 'E-mail inválido', // Mensagem caso não não passe pela validação
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: { // Essa password não vai estar no banco de dados (note que o tipo de dado dela é .VIRTUAL)
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50], // Validação por tamanho
            msg: 'A senha precisa ter entre 6 e 50 caracteres', // Mensagem caso não não passe pela validação
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8); // faz a hash da password e joga na passoword_hash (que vai para o banco)
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
