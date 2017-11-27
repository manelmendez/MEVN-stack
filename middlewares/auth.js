'use strict'

const tokenServices = require('../services/token-services')

function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: 'No tienes autorización'
    })
  }

  const token = req.headers.authorization
  tokenServices.decodeToken(token)
    .then(response => {
      req.user = response
      return res.status(200).send({
        message: 'Tienes acceso'
      })
    })
    .catch(response => {
      return res.status(response.status).send({
        message: 'No tienes autorización'
      })
    })
}

module.exports = isAuth
