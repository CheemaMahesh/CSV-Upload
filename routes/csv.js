//importing express
const express=require('express');
const router=express.Router();

const csvControllers=require('../controllers/csv_controller');


router.post('/up',csvControllers.upload);
router.get('/view/:id',csvControllers.view);

//exporting router
module.exports=router;