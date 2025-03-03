const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
const db = async()=>{
    try{
        await mongoose.connect(process.env.Mongo_Uri)
        console.log("connected")
    }
    catch(e){
        console.log(e)
    }
}
db()

const movie = require('./schema')


app.get('/',async(req,res)=>{
    const all = await movie.find()
    res.send(all)
})
app.get('/:id',async(req,res)=>{
    const all =await movie.find(req.params.id)
    res.send(all)
})
app.post('/add',async(req,res)=>{
   const {title,director,genre,ReleaseYear,availableCopies} = req.body
   
   if(!title || !director || !genre||!ReleaseYear||!availableCopies){
    res.status(400).send("Bad Request")
    return
   }
    const posti =  new movie({title,director,genre,ReleaseYear,availableCopies}) 
     await posti.save()
     res.send(posti)

})
app.put('/update/:id',async(req,res)=>{
   
    const update =await movie.findByIdAndUpdate(req.params.id,req.body,{new:true})
     if(!update){
        res.status(404).send("Not Found")
     }
})
app.delete('/delete/:id',async(req,res)=>{
   
    const update =await movie.findByIdAndDelete(req.params.id,req.body,{new:true})
     if(!update){
        res.status(404).send("Not Found")
     }
})



app.listen(process.env.port , ()=>{
    console.log("started")
} )