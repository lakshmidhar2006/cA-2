
const mongoose = require('mongoose')
const MovieSchema =new  mongoose.Schema({
    title:{type:String , Required:true },
    director:{type:String , Required:true },
    genre:{type:String , Required:true },
    ReleaseYear:{type:Number  },
    availableCopies:{type:Number ,Required:true  },

})
module.exports=   mongoose.model('Movie',MovieSchema)