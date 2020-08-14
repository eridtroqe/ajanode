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

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
  
}