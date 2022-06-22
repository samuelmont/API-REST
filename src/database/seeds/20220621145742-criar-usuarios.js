const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Samuel',
        email: 'samuel1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Samuel2',
        email: 'samuel2@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Samuel3',
        email: 'samuel3@gmail.com',
        password_hash: await bcryptjs.hash('147852369', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down() {},
};
