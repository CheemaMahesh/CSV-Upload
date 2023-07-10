//import CSV
const CSV=require('../models/csv');


module.exports.Home=async function(req,res){
    try{


             // console.log('hwool world');
      // CSV.uploadedAvatar(req,res,async function(err){
        // if(err){console.log("error i csv controller:-",err)}
      
        let allfiles=await CSV.find();
        return res.render('home',{
            aa:allfiles
        })
        
      // })


       


    }catch(err){
        if(err){console.log("error while rendering home,",err);return}
    }
}