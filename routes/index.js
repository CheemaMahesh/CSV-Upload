//importing express
const express=require('express');
const router=express.Router();

const csvController=require('../controllers/home_controller');

console.log("routes are loaded");

router.get('/',csvController.Home);
router.use('/create',require('./csv'));


//exporting router
module.exports=router;