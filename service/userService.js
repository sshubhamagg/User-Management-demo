var userModel=require('../models/userModel')

saveUser= async(data)=>{
    user=new userModel(data);
    console.log('model',data);
    
    return new Promise((resolve,reject)=>{
        user.save((error,response)=>
        {
            if(error)
            {console.log(error);
            
            reject(error)
        }
            else{
                console.log('user saved');
                
            resolve({success:true,data:response});
            }
        })
    }).catch((error)=>{
        console.log(error);
        return({success:false,error:error})
        
    })
}

getUser= async(id)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOne({_id:id}, (error,response)=>{
            if(error){
                reject(error);
            }
            else{
                console.log(response);
                resolve({success:true,data: response})
            }
        } )

    }) .catch((error)=>{
        console.log(error);
        return({success:false, error:error})
        
    })

}

getUsers= async()=>{
    return new Promise((resolve,reject)=>{
        userModel.find({}, (error,response)=>{
            if(error){
                reject(error)
            }
            else{
              //  console.log(response);
                resolve({success:true,data:response})
                
            }
        })
    }).catch((error)=>{
        console.log(error);
        return({success:false, error:error})
    })
}


exports.getUsers=getUsers;
exports.getUser=getUser;
exports.saveUser=saveUser;
