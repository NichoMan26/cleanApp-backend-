const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure:false,
  auth: {
    user: 'freddie.schuster@ethereal.email',
    pass: 'muEKZthkrwnBMeD5Rw'
    
  }
},  
{
  from: '"Boo 👻" <freddie.schuster@ethereal.email>', // sender address
});

const mailer = message => {
  let info = transporter.sendMail(message, (err, info) => {
    if(err) return console.log(err);
    console.log('Email Sent:', info);
  });
}
module.exports = mailer