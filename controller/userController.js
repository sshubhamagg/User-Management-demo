var userService=require('../service/userService')

exports.save=async(req,res)=>{


    var data=req.body;
    console.log('data',data);
    var user=await userService.saveUser(data);
    if( user.success){
        console.log(user)
        res.status(200).json({success:true,data:user.data})
    }
    else
    {
        res.status(400).json({success:false,data:user.error.message})
    }
}

exports.get=async(req,res)=>{
    var id=req.params.id;
    console.log(id);
    var user= await userService.getUser(id);
    if(user.success){
        res.status(200).json(user.data);
    }
    else{
        res.status(400).json({success:false, data:'user not found'})
    }
}

exports.getList=async(req,res)=>{
    var users=await userService.getUsers();
    if(users.success){
        console.log('user data===========',users.data);
        res.status(200).json(users.data)
        
    }
    else{
        console.log(users.error);
        res.status(400).json({success:false, data:'users not found'})
}}

exports.delete= async(req,res)=>{
    var id= req.params.id;
    var user=await userService.deleteUser(id);
    if(user.success){
        console.log('user delete');
        res.status(200).json({success:true,data:'user deleted successfully'});        
    }
    else{
        console.log(user.error);
        res.status(400).json({success:false, data:'user could not be deleted'});
    }
}

exports.update=async(req,res)=>{
    var id=req.params.id;
    console.log(id);
    var data=req.body;
    var user=await userService.updateUser(id,data);
    if(user.success){
        console.log('user updated');
        res.status(200).json(user);
    }
    else{
        console.log('user could not be updated');
        res.status(400).json('user not updated');
    }
}
