const CSV=require('../models/csv');
const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');


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
          filename:name,
          path:req.file.path
        })
        return res.redirect('back');
      })

    }catch(err){
        if(err){console.log("error in uploading the file:-",err);return}

    }
}


//module export for the seperate page for csv file

module.exports.view = async function (req, res) {
  try {
      // console.log(req.params);
      let csvFile = await CSV.findOne({ _id: req.params.id });
      // console.log('mahesh',csvFile);
      const results = [];
      const header = [];
      fs.createReadStream(csvFile.path) //seeting up the path for file upload
          .pipe(csvParser())
          .on('headers', (headers) => {
              headers.map((head) => {
                  header.push(head);
              });
              // console.log(header);
          })
          .on('data', (data) =>
              results.push(data))
          .on('end', () => {
              // console.log(results.length);
              // console.log(results);
              res.render("csv", {
                  title: "File Viewer",
                  ff:csvFile,
                  head: header,
                  data: results,
                  length: results.length
              });
          });
  } catch (error) {
      console.log('Error in fileController/view', error);
      res.status(500).send('Internal server error');
  }
}



//deleting a csv file
module.exports.deletes=async function(req,res){
    try{
        let csvFile = await CSV.findOne({ _id: req.params.id });
        if(csvFile){
            await CSV.findOneAndDelete({_id:req.params.id});
            return res.redirect('back');
        }
        return res.redirect('back');
      

    }catch(err){
        console.log("error in deleting the csv",err);
        return;
    }
}