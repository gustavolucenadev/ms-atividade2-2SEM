const mongoose = require("mongoose");

const AtendenteSchema = new mongoose.Schema({
  pessoaId: { type: String, required: true },
  departamentoId: { type: String, required: true },
  setorId: { type: String, required: true },
});

module.exports = mongoose.model("Atendente", AtendenteSchema);