const TicketRepository = require("../repositories/ticket-repository");

class TicketController {
  async getAllTickets(req, res) {
    try {
      const tickets = await TicketRepository.findAll();
      res.status(200).json({
        success: true,
        data: tickets,
        message: "Tickets listados",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar tickets",
      });
    }
  }

  async getTicketById(req, res) {
    try {
      const { id } = req.params;
      const ticket = await TicketRepository.findById(id);

      if (!ticket) {
        return res.status(404).json({
          success: false,
          message: "Ticket não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        data: ticket,
        message: "Ticket encontrado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar ticket",
        error: error.message,
      });
    }
  }

  async createTicket(req, res) {
    try {
      const ticketData = req.body;
      const newTicket = await TicketRepository.create(ticketData);

      res.status(201).json({
        success: true,
        data: newTicket,
        message: "Ticket criado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao criar ticket",
      });
    }
  }

  async updateTicket(req, res) {
    try {
      const { id } = req.params;
      const ticketData = req.body;
      const ticketUpdated = await TicketRepository.update(id, ticketData);

      if (!ticketUpdated) {
        return res.status(404).json({
          success: false,
          message: "Ticket não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Ticket atualizado",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao atualizar ticket",
      });
    }
  }

  async deleteTicket(req, res) {
    try {
      const { id } = req.params;
      const ticket = await TicketRepository.delete(id);

      if (!ticket) {
        return res.status(404).json({
          success: false,
          message: "Ticket não encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Ticket excluído",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao deletar ticket",
      });
    }
  }
}

module.exports = new TicketController();