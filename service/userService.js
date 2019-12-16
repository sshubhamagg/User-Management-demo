var userModel=require('../models/userModel')
var bcrypt=require('bcrypt');

exports.saveUser= async(data)=>{
    user=new userModel(data);
    var password=user.password;
    console.log('password==============================',password);
    var saltRounds=10;
    return new Promise((resolve,reject)=>{

         bcrypt.hash(password, saltRounds, function(err, hash) {
            user.password=hash;
            console.log(user.password);
            
           });
        user.save((error,response)=>
        {
            if(error)
            {
                console.log('error',error);
            
            reject(error)
        }
            else{
                console.log('user saved');
                resolve({success:true,data:response});
            }
        })
    }).catch((error)=>{
        console.log('error in catch',error);
        return({success:false,error:error})
        
    })
}

exports.getUser= async(id)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOne({_id:id,isActive:true}, (error,response)=>{
            if(error){
                reject({success:false,error:error});
            }
            else{
                if(response!=null){
                console.log(response);
                resolve({success:true,data: response})
            }
            else
            reject({success:false,data:'user not found'});
        }
        } )

    }) .catch((error)=>{
        console.log(error);
        return({success:false, error:error})
        
    })

}

exports.getUsers= async()=>{
    return new Promise((resolve,reject)=>{
        userModel.find({isActive:true}, (error,response)=>{
            if(error){
                console.log('error');
                reject(error)
            }
            else{
               console.log('res===',response);
                resolve({success:true,data:response})
                
            }
        })
    }).catch((error)=>{
        console.log(error);
        return({success:false, error:error})
    })
}

exports.deleteUser= async(id)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOneAndUpdate({_id:id,isActive:true},{isActive:false},(error,response)=>{
            if(error){
                reject(error)
            }
            else{
                resolve({success:true,data:response})
            }
        })
    }).catch((error)=>{
        console.log(error);
        return({success:false,error:error})
        
    })
}


exports.updateUser=async(id,data)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOneAndUpdate({_id:id,isActive:true},data,{new: true},(error,response)=>{
            if(error){
                reject(error);
            }
            else{
                resolve({success:true,data:response});
            }
        })
    }).catch((error)=>{
        console.log(error);
        return({success:false,error:error})
    })
}


