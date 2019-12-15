var mongoose=require('mongoose');
var validator=require('validator')
var userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true, 'username required']
    },
     email:{
        type:String,
        validate:[{
            validator:value=> validator.isEmail,
            message:'{value} is not valid email'
        }]
    }
})

module.exports=mongoose.model('user',userSchema);