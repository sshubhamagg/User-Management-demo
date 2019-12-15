var express=require('express');
var router=express.Router();
var app=express;

var user=require('../controller/userController')

router.route('/save').post(user.save);
router.route('/get/:id').get(user.get);
router.route('update/:id').post(user.update);
router.route('/getUsers').get(user.getList)

module.exports=router;