const {EmailService} = require('../services');

async function create(req,res) {
    try {
        const response = await EmailService.createTicket({
            recepientEmail:req.body.recepientEmail,
            subject: req.body.subject,
            content: req.body.content
        });
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
} 

module.exports = {
    create
}