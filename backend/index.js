const connectToMongo = require('./db'); // Get the acces from ('./db') to access the connectToMongo() function that is created in that component
const express = require('express')
require("dotenv").config();
var cors = require('cors')

// Call the connectToMongo() function in main file to access the database by the backend
connectToMongo();
const app = express()
// I can change the port anytime so I can't get confuse in different files when I run them 
const port = process.env.PORT || 5000;

app.use(cors())
// To send the JSON body request to database and read it in database
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// Validation that the port is running
app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})
