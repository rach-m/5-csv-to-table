
var express = require('express');
var logger = require('morgan');
var app = express()
const PORT = 3000
const csvFilePath = './data/customers.csv'
const csv = require('csvtojson')
const bodyParser = require("body-parser")

app.use(logger('dev'));
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.get("/data", (req,res)=> {
  let headers = ["id", "first_name", "last_name", "email", "job_title", "city"]
  csv({headers: headers, noheader:true})
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      console.log(jsonObj)
      res.json(jsonObj)
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

module.exports = app;
