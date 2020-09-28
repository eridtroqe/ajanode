const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

exports.sendEmail = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  let mailOptions = {};
     if(req.body.postUrl){
       mailOptions = {
        from: `<${req.body.email}>`,
        to: 'ajafirstchoice@gmail.com',
        subject: `Aja Real Estate <${req.body.name}>`,
        text: 'Name: ' + req.body.name + "\n" + 
              'Email: ' + req.body.email + '\n' + 
              'Property link: ' + url + req.body.postUrl + '\n' + 
              'Phone: ' + req.body.phone + '\n' + 
              'Message: ' + req.body.message
      };

     } else {
       mailOptions = {
        from: `<${req.body.email}>`,
        to: 'ajafirstchoice@gmail.com',
        subject: `Aja Real Estate <${req.body.name}>`,
        text: 'Name: ' + req.body.name + "\n" + 
              'Email: ' + req.body.email + '\n' + 
              'Service: ' + req.body.service + '\n' + 
              'Phone: ' + req.body.phone + '\n' + 
              'Message: ' + req.body.message
      };

     }


    transporter.sendMail(mailOptions, function(error, info){

        if (error) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
  
}