'use strict'

const express = require('express')
const userCtrl = require('../controllers/userCtrl')
const noteCtrl = require('../controllers/noteCtrl')
const auth = require('../middlewares/auth')
const api = express.Router()

// AUTH
api.get('/private', auth)
// USER
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.post('/getUser', userCtrl.getUser)
api.post('/getAllUsers', userCtrl.getAllUsers)
// NOTES
api.post('/saveNote', noteCtrl.saveNote)
api.post('/getNotes', noteCtrl.getNotes)

module.exports = api
