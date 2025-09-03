const RegistroRepository = require("../repositories/registro-repository");

class RegistroController {
  async getAllRegistros(req, res) {
    try {
      const registros = await RegistroRepository.findAll();
      res.status(200).json({
        success: true,
        data: registros,
        message: "Registros listados",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar registros",
      });
    }
  }

  async getRegistroById(req, res) {
    try {
      const { id } = req.params;
      const registro = await RegistroRepository.findById(id);

      if (!registro) {
        return res.status(404).json({
          success: false,
          message: "Registro não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        data: registro,
        message: "Registro encontrado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar registro",
        error: error.message,
      });
    }
  }

  async createRegistro(req, res) {
    try {
      const registroData = req.body;
      const newRegistro = await RegistroRepository.create(registroData);

      res.status(201).json({
        success: true,
        data: newRegistro,
        message: "Registro criado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao criar registro",
      });
    }
  }

  async updateRegistro(req, res) {
    try {
      const { id } = req.params;
      const registroData = req.body;
      const registroUpdated = await RegistroRepository.update(id, registroData);

      if (!registroUpdated) {
        return res.status(404).json({
          success: false,
          message: "Registro não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Registro atualizado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao atualizar registro",
      });
    }
  }

  async deleteRegistro(req, res) {
    try {
      const { id } = req.params;
      const registro = await RegistroRepository.delete(id);

      if (!registro) {
        return res.status(404).json({
          success: false,
          message: "Registro não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Registro excluído",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao deletar registro",
      });
    }
  }
}

module.exports = new RegistroController();