const mongoose = require('mongoose');

// URL to connect to the database 
const mongoURI = "mongodb+srv://jenil:jenil@demo.7fmbb.mongodb.net/inotebook?authSource=admin&replicaSet=atlas-lugv9y-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
// mongodb+srv://jenil:jenil@demo.7fmbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


// Connect to the database by creating function of connectToMongo()
const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Sucessfully")
    })
}

module.exports = connectToMongo;