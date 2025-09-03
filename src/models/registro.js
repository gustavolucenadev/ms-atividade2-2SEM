const mongoose = require("mongoose");

const RegistroSchema = new mongoose.Schema({
  ticketId: { type: String, required: true },
  atendenteId: { type: String, required: true },
  texto: { type: String, required: true },
  motivo: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Registro", RegistroSchema);