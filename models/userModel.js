var mongoose=require('mongoose');
var validator=require('validator')
var userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name is required']
    },
    username:{
        type:String,
        required:[true, 'username is required']
    },
    phone:{
        type:String,
        require:[true, 'phone no is required'],
        validate:[{
            validator: value=>(validator.isNumeric(value) && validator.isLength(value,{min:10,max:10})),
            message:'{value} is not a valid mobile number'
        }
    ]
    },
     password:{
        type:String,
        required:[true,'password is required']
     },
     email:{
        type:String,
        validate:[{
            validator:value=> validator.isEmail,
            message:'{value} is not valid email'
        }]
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model('user',userSchema);