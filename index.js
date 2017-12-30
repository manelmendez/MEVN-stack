'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, { useMongoClient: true }, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conectado a la base de datos')

  app.listen(config.port, () => {
    console.log(`API corriendo en http://localhost:${config.port}`)
  })
})