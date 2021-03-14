const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const mailer = require('./nodeMailer.js')
const mysql = require('mysql')


const fs = require('fs');
const bodyParser = require("body-parser");
const { json } = require('express');
const urlencodedParser = bodyParser.json();
const app = express()
const PORT = process.env.PORT || 5000

const conn = mysql.createConnection({
  host:'basenkodenis.ru',
  user:'u1055291_denis',
  database:'u1055291_bilar',
  password:'Bilar99!',
})

conn.connect(err=>{
  if(err){
    console.log(err);
    return err
  } else {

    console.log("Database .... OK");
    app.listen(PORT,() => console.log(`Server has been started on ${PORT}...`))
  }
})

let query = 'SELECT * FROM cars'



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

app.use(cors())

app.get('/',  (req, res) => {
  conn.query('SELECT * FROM cars',(err,result) => {
  res.send(result)
  })
})


app.post('/', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400)
  let r = req.body
  let query = `INSERT INTO cars 
  (id,car,creater,place,number,service,washer,comment) 
  values('${r.id}','${r.car || ''}','${r.creater}','${r.place}','${r.number || ''}','${r.service}','${r.washer || ''}','${r.comment || ''}')`
  conn.query(query, (err,result) => {
    if(err) {
      console.log(err)
      }
    res.sendStatus(200)
  })
})

app.delete('/', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400)
  let query = `DELETE FROM cars WHERE id='${req.body.carId}'`
  conn.query(query, (err,result) => {
    if(err) {
      console.log(err)
      }
    res.sendStatus(200)
  })
})

app.put('/', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400)
  let r = req.body
  let query = `UPDATE cars SET 
      id='${r.id}',car='${r.car}',creater='${r.creater}',
      place='${r.place}',number='${r.number}',service='${r.service}',
      washer='${r.washer}',comment='${r.comment}' 
      WHERE id='${r.id}'`
  conn.query(query, (err,result) => {
    if(err) {
      console.log(err)
      }
    res.sendStatus(200)
  })
})




















// app.get('/mail', (req, res) => {
//   const message = {
//     to: "jet.li.64@list.ru", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   }
//   mailer(message)
  

// })

// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "jet.li.64@list.ru", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
