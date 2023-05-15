var express=require('express')
var router=express.Router()
var mongodb=require('mongodb')
router.post('/save-que',async function(req,res,next){// receive the req
    try{
    // take the data from req
        const dataObj=req.body.data
        console.log(dataObj)
    
    // connect with db
        const url="mongodb://127.0.0.1:27017"
        //const url="mongodb+srv://127.0.0.1:9amreact@react.h0oi4ea.mongodb.net"
        const mongodbClient=mongodb.MongoClient
        const server=await mongodbClient.connect(url)
        const db=server.db('school')
        const collection=db.collection('questions')
         //perform requred opearions
        const result=await collection.insertOne(dataObj)
        // prepare and send res back to client*/
        res.send(result)
    }catch(e){
        console.log(e)
        res.send(e)
    }
})

module.exports=router;