const express=require('express')//imp express
const mongoose=require('mongoose')//imp mongoose
const app = express()
const port=4800//create port
app.use(express.json())//TO Read req.body
app.use('/',require('./routes/clientroute.js'))//definde router
mongoose
.connect("mongodb+srv://fathallahyoussef:youssef2005F@db.0boswmr.mongodb.net/learn-mongoose?retryWrites=true&w=majority")
.then(()=>console.log("db connected"))// connect mongo atlas to data base
