const Registro = require("../models/registro");

class RegistroRepository {
  async create(data) {
    return await Registro.create(data);
  }

  async findAll() {
    return await Registro.find();
  }

  async findById(id) {
    return await Registro.findById(id);
  }

  async update(id, data) {
    return await Registro.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Registro.findByIdAndDelete(id);
  }
}

module.exports = new RegistroRepository();