"use strict";module.exports = { // Migração feita na coluna email, onde falamos que agora ela não pode se repetir
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  down() {},
};
