const express = require('express')
const cors = require('cors')
const mailer = require('./nodeMailer.js')
const mysql = require('mysql')
const cron = require('node-cron')
const http = require('request')


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
  let msg = `AUTO: <b>${r.car}</b> NUMERO: <b>${r.number}</b> PALVELU: <b>${r.service}</b> Washer:<b>${r.creater}</b>|<b>${r.washer}</b> KOMMENTTI: <b>${r.comment}</b>` //
  let query = `INSERT INTO carsV 
  (id,car,creater,place,number,service,washer,comment) 
  values('${r.id}','${r.car || ''}','${r.creater}','${r.place}','${r.number || ''}','${r.service}','${r.washer || ''}','${r.comment || ''}')`
  conn.query(query, (err,result) => {
    if(err) {
      console.log(err)
      }
      //Telegram bot
      http.post(`https://api.telegram.org/bot1761813796:AAFkV2cazZksbj4SwtU-M3m40kkMlbjkBnY/sendMessage?chat_id=-519331457&parse_mode=html&text=${msg}`, 
      function (error, response, body) {  
        if(response.statusCode===200){
          res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
        }
        if(response.statusCode!==200){
          res.status(400).json({status: 'error', message: 'Произошла ошибка!'});
        }
      });
  })
})

app.post('/report', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400)
  let fromTS =  new Date(req.body.from).getTime()
  let toTS =  new Date(req.body.to).getTime()
  let query = `SELECT *
              FROM carsV WHERE`
  let queryDate = ` id BETWEEN ${fromTS} AND ${toTS}`
  let queryService = ''
  query += queryDate
  
  if(req.body.service !== 'All'){
     queryService = ` AND service = '${req.body.service}'`
  }
  if(req.body.washer !== 'All'){
    query += ` AND washer = '${req.body.washer}'${queryService} OR${queryDate}${queryService} AND creater = '${req.body.washer}'`
  } else {
    query += queryService
  }
  conn.query(query, (err,result) => {
    if(err) {
      console.log(err)
      }
      res.send(result)
  })
})

app.post('/search', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400)
  console.log(req.body.searchWord);
  let query = `SELECT * FROM carsV WHERE number LIKE "%${req.body.searchWord }%"`
  
  conn.query(query, (err,result) => {
    if(err) {
      console.log(err)
      }
      console.log('result: ', result);
      res.send(result)
  })
})

app.post('/user', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400)
  console.log(req.body);
  let query = `SELECT * FROM users WHERE name LIKE "${req.body.name}" AND pass LIKE "${req.body.password}"`
  
  conn.query(query, (err,result) => {
    if(err) {
      console.log(err)
      }
      if(result[0]){
      console.log('result[0]: ', result[0]);
      res.send(result)
    } else {
      res.sendStatus(401)
    }
      
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



