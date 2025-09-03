const Ticket = require("../models/ticket");

class TicketRepository {
  async create(data) {
    return await Ticket.create(data);
  }

  async findAll() {
    return await Ticket.find();
  }

  async findById(id) {
    return await Ticket.findById(id);
  }

  async update(id, data) {
    return await Ticket.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Ticket.findByIdAndDelete(id);
  }
}

module.exports = new TicketRepository();