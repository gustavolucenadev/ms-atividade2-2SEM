const Atendente = require("../models/atendente");

class AtendenteRepository {
  async create(data) {
    return await Atendente.create(data);
  }

  async findAll() {
    return await Atendente.find();
  }

  async findById(id) {
    return await Atendente.findById(id);
  }

  async update(id, data) {
    return await Atendente.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Atendente.findByIdAndDelete(id);
  }
}

module.exports = new AtendenteRepository();