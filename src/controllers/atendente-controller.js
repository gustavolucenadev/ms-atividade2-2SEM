const AtendenteRepository = require("../repositories/atendente-repository");

class AtendenteController {
  async getAllAtendentes(req, res) {
    try {
      const atendentes = await AtendenteRepository.findAll();
      res.status(200).json({
        success: true,
        data: atendentes,
        message: "Atendentes listados",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar atendentes",
      });
    }
  }

  async getAtendenteById(req, res) {
    try {
      const { id } = req.params;
      const atendente = await AtendenteRepository.findById(id);

      if (!atendente) {
        return res.status(404).json({
          success: false,
          message: "Atendente não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        data: atendente,
        message: "Atendente encontrado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar atendente",
        error: error.message,
      });
    }
  }

  async createAtendente(req, res) {
    try {
      const atendenteData = req.body;
      const newAtendente = await AtendenteRepository.create(atendenteData);

      res.status(201).json({
        success: true,
        data: newAtendente,
        message: "Atendente criado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao criar atendente",
      });
    }
  }

  async updateAtendente(req, res) {
    try {
      const { id } = req.params;
      const atendenteData = req.body;
      const atendenteUpdated = await AtendenteRepository.update(id, atendenteData);

      if (!atendenteUpdated) {
        return res.status(404).json({
          success: false,
          message: "Atendente não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Atendente atualizado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao atualizar atendente",
      });
    }
  }

  async deleteAtendente(req, res) {
    try {
      const { id } = req.params;
      const atendente = await AtendenteRepository.delete(id);

      if (!atendente) {
        return res.status(404).json({
          success: false,
          message: "Atendente não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Atendente excluído",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao deletar atendente",
      });
    }
  }
}

module.exports = new AtendenteController();