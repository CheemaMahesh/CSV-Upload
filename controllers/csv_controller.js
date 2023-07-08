const CSV=require('../models/csv');

module.exports.upload=async function(req,res){
    try{
      // console.log('hwool world');
      CSV.uploadedAvatar(req,res,async function(err){
        if(err){console.log("error i csv controller:-",err)}

        // Access the uploaded file object
  const uploadedFile = req.file;

  // Extract the name from the filename
  const name = uploadedFile.originalname.split('.').slice(0, -1).join('.');

      
        let csv=await CSV.create({
          avatar:CSV.csvPath+'/'+req.file.filename,
          filename:name
        })
        return res.redirect('back');
      })

    }catch(err){
        if(err){console.log("error in uploading the file:-",err);return}

    }
}