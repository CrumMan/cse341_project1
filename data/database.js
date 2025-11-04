const dotenv = require('dotenv').config();

const MongoClient = require('mongodb').MongoClient

let database;

const initDb = (callback) => {
   if (database){
    console.log('Db is already installed')
   } 
   console.log('MONGODB_URI value:', process.env.MONGODB_URI);
   console.log('MONGODB_URI type:', typeof process.env.MONGODB_URI);
   console.log('First 20 chars:', process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 20) : 'undefined');
   
   MongoClient.connect(process.env.MONGODB_URI)
   .then((client)=> {
    database = client.db;
    callback(null, database);
   })
   .catch((err) => {
    callback(err)
   })
}

const getDatabase = () => {
    if (!database){
        throw Error('Database not initialized')
    }
    return database;
}

module.exports= {
    getDatabase,
    initDb
}
