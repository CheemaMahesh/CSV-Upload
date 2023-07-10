//importing mongoose
const mongoose=require('mongoose');

//importing multer
const multer=require('multer');
//importing path
const path=require('path');

const CSV_PATH=path.join('./uploads/csv');


//creating schema for the csv
const csvSchema=new mongoose.Schema({
   avatar:{
    type:'String'
   },
   filename:{
    type:'String'
   },
   path:{
    type:'String'
   }

},{
    timestamps: true
});


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',CSV_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

//static methods//===//
csvSchema.statics.uploadedAvatar=multer({storage:storage}).single('avatar');
csvSchema.statics.csvPath=CSV_PATH;


//making schema model
const CSV=mongoose.model('CSV',csvSchema);


//exporting model
module.exports=CSV;


