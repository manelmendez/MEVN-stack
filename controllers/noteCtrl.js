'use strict'

const Note = require('../models/note')
const userCtrl = require('../controllers/userCtrl')

/**
 * Function to save a new note in the DB 
 *
 */
function saveNote(req, res) {
  // getting data
  const note = new Note({
    title: req.body.title,
    description: req.body.description
  })
  
  // saving note in DB
  note.save((err, noteSaved) => {
    if (err) return res.status(500).send({
      message: `Error al guardar nota: ${err}`
    })
    // if not error, save noteId into user notes Array
    userCtrl.saveNoteToUser(noteSaved.id, req.body.userId)
    return res.status(200).send({
      note: noteSaved
    })
  })
}

/**
 *  Function to get all notes from user notes array
 *
 */
function getNotes(req, res) {
  // getting data
  let notes = []
  notes=req.body.notes
  // find multiples IDs in array
  Note.find({
    '_id': { $in: notes}
  }, (err, returnedNotes) => {
    if (err) {
      console.log(err)
    }
    console.log(returnedNotes)
    return res.status(200).send({
      notes: returnedNotes
    })
  })
}

module.exports = {
  saveNote,
  getNotes
}
