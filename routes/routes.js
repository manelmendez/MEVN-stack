'use strict'

const express = require('express')
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middlewares/auth')
const api = express.Router()

// AUTH
api.get('/private', auth, (req, res) => {
  res.status(200).send({
    message: 'Tienes acceso'
  })
})

// USER

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

module.exports = api
