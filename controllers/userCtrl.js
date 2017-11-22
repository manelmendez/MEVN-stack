'use strict'

const User = require('../models/user')
const tokenServices = require('../services/token-services')
const bcrypt = require('bcrypt-nodejs')

function signUp(req, res) {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  })

  user.save((err) => {
    if (err) return res.status(500).send({
      message: `Error al crear el usuario: ${err}`
    })

    return res.status(200).send({
      token: tokenServices.createToken(user)
    })
  })
}

function signIn(req, res) {
  User.find({
    email: req.body.email
  }, (err, user) => {
    if (err) {
      console.log(`Error: ${err}`)
      return res.status(500).send({
        message: `Error al iniciar sessión: ${err}`
      })
    }
    if (!user[0]) {
      console.log("No existe el usuario")
      return res.status(401).send({
        message: 'Algunos de los datos introducidos son incorrectos.'
      })
    }
    
    if (user[0]) {
      req.user = user[0]
      if (bcrypt.compareSync(req.body.password, user[0].password)) {
        console.log(`${user[0].email} se ha logueado correctamente`);
        res.status(200).send({
          message: 'Te has logueado correctamente',
          token: tokenServices.createToken(user)
        })
      }
      else {
        console.log("UNAUTHORIZED. Contraseña incorrecta.")
        return res.status(401).send({
          message: 'Algunos de los datos introducidos son incorrectos.'
        })
      }
    }
  })
}

module.exports = {
  signUp,
  signIn
}
