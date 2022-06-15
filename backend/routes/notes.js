const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({ min: 6 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title, description, tag, user: req.user.id

        })
        const savedNote = await note.save()
        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {


        // Create a newNotes object
        const newNotes = {};
        if (title) {
            newNotes.title = title
        }

        if (description) {
            newNotes.description = description
        }

        if (tag) {
            newNotes.tag = tag
        }

        // Find the note to be updated and update it
        let notes = await Notes.findById(req.params.id);
        if (!notes) { return res.status(404).send("Not Found") }

        // This will not allow other user to access another users file.
        if (notes.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // This will allow user to update its notes.
        notes = await Notes.findByIdAndUpdate(req.params.id, { $set: newNotes }, { new: true })
        res.json({ notes })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    
    try {
        // Find the note to be delete and delete it
        let notes = await Notes.findById(req.params.id);
        if (!notes) { return res.status(404).send("Not Found") }

        // Allow deleteion if user owns this note.
        if (notes.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // This will allow user to delete its notes.
        notes = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "note has been delete", notes: notes })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// Sharwil's deletenote backend code
// router.delete("/deleteNote/:id", fetchUser, async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }
  
//       //Find the note to be deleted and delete it.
//       if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//         //Yes, it's a valid ObjectId, proceed with `findById` call.
//         let note = await Note.findById(req.params.id); //const cannot be used with await in this case.
//         if (!note) {
//           return res.status(404).send("Not Found");
//         }
  
//         //Allow deletion only if user owns this note.
//         if (note.user.toString() !== req.user.id) {
//           return res.status(401).send("Not Allowed");
//         }
  
//         note = await Note.findByIdAndDelete(req.params.id);
//         res.json({ Successs: "Note has been deleted.", note: note });
//       } else {
//         console.log("invalid Id received");
//       }
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error Occured.");
//     }
//   });
module.exports = router