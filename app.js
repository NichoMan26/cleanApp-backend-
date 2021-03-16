const express = require('express')
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
  let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth.length < 2 ? '0' + (+date.getMonth()+1) : (+date.getMonth()+1)
    let day = date.getDate()
  let toDay = year +'-' + month +'-' + day
    conn.query(`SELECT * FROM carsV WHERE date > '${toDay}'`,(err,result) => {
      if(err){
        console.log('err: ', err);
      } 
      res.send(result)
    })
})

app.get('/all',  (req, res) => {
  conn.query('SELECT * FROM carsV',(err,result) => {
  res.send(result)
  })
})

app.post('/', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400)
  let r = req.body
  let query = `INSERT INTO carsV 
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
  let query = `DELETE FROM carsV WHERE id='${req.body.carId}'`
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
  let query = `UPDATE carsV SET 
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

app.get('/mail', (req, res) => {
  let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth.length < 2 ? '0' + (+date.getMonth()+1) : (+date.getMonth()+1)
    let day = date.getDate()
  let toDay = year +'-' + month +'-' + day
  conn.query(`SELECT * FROM carsV WHERE date > '${toDay}'`,(err,result) => {
    let d = new Date()
    let output = result.reduce((acc = '', e ,idx, result) => {
      console.log(e.date);
      return acc += `<p><b>Машина:</b>${e.car}
                        <b>Номер:</b>${e.number} 
                        <b>Место:</b>${e.place === 'K' ? 'Керава' : 'Ванта'} 
                        <b>Тип мойки:</b>${e.service} 
                        <b>Мойщик:</b>${e.washer} ${e.creater}
                        <b>Комментарий:</b> ${e.comment} 
                        <b>Дата:</b>${e.date.getDate()+'-'+e.date.getMonth()+'-'+e.date.getFullYear()+' '+e.date.getHours()+':'+e.date.getMinutes()}</p>`
    })
    const message = {
      from:'Bilar <karlgromov80@mail.ru>',
      to: "bilar99get@gmail.com", // list of receivers
      subject: 'lol', // Subject line
      text: 'body', 
      html: output, // html body
    }
    mailer(message)
    })

})
