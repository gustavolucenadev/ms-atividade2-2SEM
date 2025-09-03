const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  pessoaId: { type: String, required: true },
  titulo: { type: String, required: true },
  telefone: { type: String, required: true },
});

module.exports = mongoose.model("Ticket", TicketSchema);