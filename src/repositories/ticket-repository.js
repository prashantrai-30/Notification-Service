const crudRepository = require('./crud-repository');

const {Ticket} = require('../models');

class TicketRepository extends crudRepository {
    constructor() {
        super(Ticket);
    }

    async getpendingTickets() {
        const response = await Ticket.findAll({
            where: {
                status: 'PENDING'
            }
        });
    }
}

module.exports = TicketRepository;