const express=require('express')//imp express
const Client = require('../models/clientShema')//imp client
const route=express.Router()//imp route of express


//route to find and view all client


     route.get('/',async(req,res)=>{
      try{
     const clientlist=await Client.find()
     res.status(200).json({msg:'get all client',clientlist:clientlist})
      }
       catch(err){
      res.status(500).json({msg:err})
}
})


//route to post a client


     route.post('/post',async(req,res)=>{
     try{
    const clientlist=new Client(req.body)
    await clientlist.save()
    res.status(201).json({msg:'New Contact',NewContact:clientlist})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
    })


    //route to find bye id


      route.get('/getbyid',async(req,res)=>{
        try{
        const clientlist=await Client.findById({_id:"64b7b6a32f5e1ae6083bd6cb"})
        await clientlist.save()
        res.status(201).json({msg:'New Contact',NewContact:clientlist})
        }
        catch(err){
            res.status(500).json({msg:err})
        }
        })


        //route to find just one


        route.get('/getone',async(req,res)=>{
            try{
            const clientlist=await Client.findOne({age:17})
            await clientlist.save()
            res.status(201).json({msg:'New Contact',NewContact:clientlist})
            }
            catch(err){
                res.status(500).json({msg:err})
            }
            })


            //route to delete just one client


            route.delete('/deleteone',async(req,res)=>{
                try{
                const clientlist=await Client.deleteOne({age:17})
                await clientlist.save()
                res.status(201).json({msg:'New Contact',NewContact:clientlist})
                }
                catch(err){
                    res.status(500).json({msg:err})
                }
                })


                //route to find by id and remove 


                route.delete('/findidandremove',async(req,res)=>{
                    try{
                    const clientlist=await Client.findByIdAndRemove({_id:"64b7b6c72f5e1ae6083bd6ce"})
                    await clientlist.save()
                    res.status(201).json({msg:'New Contact',NewContact:clientlist})
                    }
                    catch(err){
                        res.status(500).json({msg:err})
                    }
                    })


//route to Chain Search Query Helpers to Narrow Search Results


                    route.get('/findfood',async(req,res)=>{
                        try{
                        const clientlist=await Client.find({favoriteFoods:"sheese"})
                        .limit(2)
                        .select({age:false})
                        .sort({name:"asc"})
                        .then(console.log("succés"))
                        res.status(201).json({msg:'this is food ',NewContact:clientlist})
                        }
                        catch(err){
                            res.status(500).json({msg:err})
                        }
                        })
                  


            
module.exports=route //export route