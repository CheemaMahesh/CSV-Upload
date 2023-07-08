const express=require('express');
const Port=8000;
const app=express();

const db=require('./config/mongoose');

//static
app.use(express.static('./assets'));

//use ejs
app.set('view engine','ejs');
app.set('views','./views');



//make the uploads available to the browser
app.use('/uploads',express.static(__dirname+'/uploads'));

app.use('/',require('./routes'));
app.listen(Port,function(err){
    if(err){conseole.log("error in starting the server:-",err);return}
    console.log("server is up and running on port:-",Port);
})

