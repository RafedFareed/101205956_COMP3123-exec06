const NoteModel = require('../models/NotesModel.js');
const express = require('express')
const router = express.Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save

router.post('/notes', async (req, res) => {
    // Validate request
    const newNotes = new NoteModel(req.body)
    try {
        await newNotes.save()
        res.status(201).send(newNotes)
    } catch (error) {
        res.status(500).send({ message: "Error while inserting new notes" })
    }
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    // Validate request
    try {
        const notes = await NoteModel.find()
        res.status(201).send(notes)
    } catch (error) {
        res.status(500).send({ message: "Error while inserting new notes" })
    }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const findNotes = await NoteModel.findById(req.params.noteId)
        const fn = await findNotes.save()
        res.status(201).send(fn)
    } catch (error) {
        res.status(500).send({ message: "Error while searching new notes" })
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const updateNotes = await NoteModel.findByIdAndUpdate(req.params.noteId, req.body)
        const un = await updateNotes.save()
        res.status(201).send(un)
    } catch (error) {
        res.status(500).send({ message: "Error while updating new notes" })
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        console.log(req.body)
        const deleteNote = await NoteModel.findByIdAndDelete(req.params.noteId)
        if (!deleteNote) res.status(404).send("No id found")
            res.status(200).send()
    } catch (error) {
        res.status(500).send({ message: "Error while deleting new notes" })
    }
    //TODO - Write your code here to delete the note using noteid
});

module.exports = router