//importing express
const express=require('express');
const router=express.Router();

// const csvController=require('../controllers/home_controller');
const csvControllers=require('../controllers/csv_controller');

console.log("routes are loaded2");

router.post('/up',csvControllers.upload);

//exporting router
module.exports=router;