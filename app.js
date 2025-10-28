const express = require("express")
require('dotenv').config();
const uri = process.env.MONGODB_URI
const cors = require("cors")
const mongodb = require('./db/connect')
const app = express()
const port = process.env.PORT || 3003

app.use(cors());
app.use(express.json())

app.use('/', require('./routes'))

mongodb.initDb((err, mongodb) => {
    if(err){
        console.log(err)
    } else{
        app.listen(port)
        console.log('we are connected to DB and listening on ', port)
    }
})