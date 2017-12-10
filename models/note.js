'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const NoteSchema = new Schema({
  title: String,
  description: String,
  date: {
    type: Date,
    default: Date.now()
  }
})

/**
 * Function that do some things after saving note in DB
 *
 
NoteSchema.post('save', function() {
  let user = this
  console.log("Usuario " + user.name + " registrado correctamente con el email: " + user.email);
})*/

module.exports = mongoose.model('Note', NoteSchema)