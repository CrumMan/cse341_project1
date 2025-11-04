const dotenv = require('dotenv').config();

const MongoClient = require('mongodb').MongoClient

let database;

const initDb = (callback) => {
   if (database){
    console.log('Db is already installed')
   } 
   MongoClient.connect(process.env.MONGODB_URI)
   .then((client)=> {
    database = client.db();
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
