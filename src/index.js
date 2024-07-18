const express = require('express');

const {ServerConfig,  Logger} = require('./config');

const apiRoutes = require('./routes');

const mailsender = require('./config/email-config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,async() =>{
    console.log(`succesfully started the server ${ServerConfig.PORT}`);
   try {
    const response = await mailsender.sendMail({
        from: ServerConfig.GMAIL_EMAIL,
        to: 'prashantkumar2488@gmail.com',
        subject: 'Is the service working ?',
        text: 'Yes it is working'
    });
    console.log(response);
   } catch (error) {
    console.log(error);
   }
});