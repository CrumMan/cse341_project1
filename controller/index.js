const mongodb = require('../db/connect');
const {ObjectId} = require('mongodb')

const getAll = async (req,res) =>{
    const db = mongodb.getDb();
    const result = await db.collection('contact-test').find()
    const contacts = await result.toArray()
    res.status(200).json(contacts)
        res.setHeader("Content-Type", "application/json")
};
const getSingle = async(req,res)=>{
    try{
    const userid = new ObjectId(req.params.id)
    const db = mongodb.getDb();
    const result = await db.collection('contact-test').findOne({_id: userid})
    if (!result) { return res.status(404).json({message: "contact not found"})}
    res.status(200).json(result)
    }
    catch (err){
        console.log('Error:', err);
        res.status(500).json({error: 'something went wrong'})

    }
}
module.exports = {getAll, getSingle}