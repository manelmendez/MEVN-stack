'use strict'

const User = require('../models/user')
const tokenServices = require('../services/token-services')

function signUp(req, res) {
  console.log(req.body.email);
  console.log(req.body.name);
  console.log(req.body.password);
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
  }, (err, res) => {
    if (err) return res.status(500).send({
      message: `Error al iniciar sessión: ${err}`
    })
    if (!user) return res.status(404).send({
      message: 'No existe el usuario'
    })

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: tokenServices.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}
