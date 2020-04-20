const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

exports.sendEmail = (req, res, next) => {
    const mailOptions = {
        from: "'Aja Real Estate'",
        to: 'erid.troqe@gmail.com',
        subject: 'Real Estate',
        text: 'Name: ' + req.body.name + "\n" + 
              'Email: ' + req.body.email + '\n' + 
              'Service: ' + req.body.service + '\n' + 
              'Phone: ' + req.body.phone + '\n' + 
              'Message: ' + req.body.message
      };

      console.log("Body ", req.body);
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.sendStatus(500);
        } else {
          console.log('Email sent: ' + info.response);
          res.sendStatus(200);
        }
      });
  
}