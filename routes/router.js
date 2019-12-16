var express=require('express');
var indexRouter=express.Router();
var app=express;

var userRoute=require('./userRouter')

indexRouter.use('/user',userRoute);



module.exports=indexRouter;