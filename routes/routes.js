'use strict'

const express = require('express')
const userCtrl = require('../controllers/userCtrl')
const noteCtrl = require('../controllers/noteCtrl')
const oauth2Ctrl = require('../controllers/oauth2Ctrl')
const auth = require('../middlewares/auth')
const api = express.Router()

// AUTH
api.post('/private', auth.isAuth)

// OAUTH2
api.get('/oauth/google', oauth2Ctrl.verifyGoogleToken)

// USER
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/getUser/:id', auth.checkAuth, userCtrl.getUser)
api.get('/getAllUsers', userCtrl.getAllUsers)
// NOTES
api.post('/saveNote', noteCtrl.saveNote)
api.get('/getNotes/:id', auth.checkAuth, noteCtrl.getNotes)

module.exports = api
