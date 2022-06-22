import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            arg: [3, 255],
            msg: 'Nome precisa ter entr 3 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            arg: [3, 255],
            msg: 'Sobrenome precisa ter entr 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
