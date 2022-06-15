const mongoose = require('mongoose');
// To use Schema it is required to import Schema
const { Schema } = mongoose;

// This is the body of backend notes where users will write and it will be store to the database.
const NotesSchema = new Schema({
    // This will clarify that the user1 notes won't be access by user2.
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    title:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
        
    },
    
    tag:{
        type: String,
        default: "general"
    },

    date:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('notes', NotesSchema)