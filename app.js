const express = require('express')

const cors = require('cors')
const fs = require('fs');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.json();

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT)
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