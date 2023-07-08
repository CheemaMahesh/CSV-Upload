const mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1/CSV');

const db=mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'));

db.once('open',function(){
  console.log("Connection was Successful on mongoose");
});

module.exports=db;