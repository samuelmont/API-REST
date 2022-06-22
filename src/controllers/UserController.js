import User from '../models/User';

class UserController {
  // Index (Desativada)
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] }); // Mostra todos usuários
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show (Desativada)
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id); // Mostra todos usuários
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Store
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body); // Cria novo usuário
      const { id, nome, email } = novoUser; // destructuring tirando id, nome e email do novoUser
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      }); // 400 é bad request
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body); // Pega do body os dados que for mandados para atualizar
      const { id, nome, email } = novosDados; // destructuring tirando id, nome e email do novosDados

      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      }); // 400 é bad request
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      }); // 400 é bad request
    }
  }
}

export default new UserController(); // exporta UserController como contrutora
