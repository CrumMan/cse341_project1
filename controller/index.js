const mongodb = require('../db/connect');
const { get } = require('../routes');
const ObjectId = require('mongodb').ObjectId

const getAll = async (req,res) =>{
    const db = mongodb.getDb();
    const result = await db.collection('contact-test').find()
    const contacts = await result.toArray()
    res.status(200).json(contacts)
        res.setHeader("Content-Type", "application/json")
};
module.exports = {getAll}