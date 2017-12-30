'use strict'  

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const api = require('./routes/routes')
const path = require('path');

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//la ruta a los archivos estaticos (HTML, JS, ...) una vez hecho el "build" en cliente
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',api);

module.exports = app