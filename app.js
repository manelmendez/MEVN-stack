'use strict'  

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const api = require('./routes/routes')
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet')
const history = require('connect-history-api-fallback')

// middleware para solo parsear requires en formato urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// middleware para solo parsear requires en formato JSON
app.use(bodyParser.json())
// middleware para usar CORS y su configuración (métodos que permite)
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// middleware para obtener LOGS de cada petición que hagamos al servidor
//app.use(morgan('dev'))

// SEGURIDAD, helmet protege de varias cosas sobretodo en temas de cabeceras HTTP
app.use(helmet())

// middleware para que las rutas estaticas de la SPA funcionen bien (esto es "por culpa" del HISTORY MODE de VueJS)
app.use(history())

// la ruta a los archivos estaticos (HTML, JS, ...) una vez hecho el "build" en cliente
app.use(express.static(path.join(__dirname, 'public')));
// hay que decirle a express en que ruta estan las vistas (aunque solo hay una que es index.html en la carpeta public)
app.set('views', path.join(__dirname, 'public'));
// aquí le decimos que el engine que usaremos es html y que use EJS para renderizarlo
app.engine('html', require('ejs').renderFile);
// ahora seteamos html como view engine de express
app.set('view engine', 'html');
// aquí le decimos que en cualquier ruta nos renderice el index.html que es la base de todos los componentes
// app.get('*', (request, response) => {
//    response.render('index')
// })

app.use('/api',api);

module.exports = app