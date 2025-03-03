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
    }
    catch(e){
        console.log(e)
    }
}