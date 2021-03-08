const express = require('express')

const cors = require('cors')
const fs = require('fs');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.json();

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT)
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
  fs.readFile("cars.json", "utf8", 
    function(error,data){
      console.log(data);
      res.send(data)
    });
})
app.put('/',  (req, res) => {
  
  fs.readFile("cars.json", "utf8", 
    function(error,data){
      console.log(data);
      res.send(data)
    });
})