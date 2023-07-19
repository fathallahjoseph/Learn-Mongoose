const mongoose=require('mongoose')//imp express
const clientShema=mongoose.Schema(
 {
    name:String,
    age:Number,
    favoriteFoods:[String]
 }
)//imp mongoose.Shema to make client same .map
const Client= mongoose.model('client',clientShema)//make tag (*,_,*)
module.exports=Client//export client