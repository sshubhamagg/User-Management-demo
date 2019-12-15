var userService=require('../service/userService')


// exports.saveCertificate = async (req, res) => {
//     try {
//         const data = req.body
//         if (_.isEmpty(data.certificate)) {
//             throw new CertifiateNotFound('Certificate Not Found')
//         }
//         else if (_.isEmpty(data.storeAddress)) {
//             throw new StoreNotFound("Certificate Store Not Found")
//         }
//         else {
//             const cert = data.certificate;
//             console.log(cert);
            
//             cert.issuers[0].certificateStore = data.storeAddress;
//             const receipt = await certificateService.saveCertificate(cert);
//             if (receipt.success)
//                 res.status(httpStatus.OK).json({ success: true, data: 'Document saved successfully' });
//             else
//                 throw new DocumentNotSaved("Document Could Not Be Saved")
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(httpStatus.BAD_REQUEST).json({
//             errorCode: error.ErrorCode,
//             errorMessage: error.message
//         });
//     }
// }


exports.save=async(req,res)=>{
    var data=req.body;
    console.log(data);
    
    var user=await userService.saveUser(data);
    if( user.success){
        res.status(200).json({success:true,data:'user added'})
        console.log(res.data)
    }
    else
    {
        res.status(400).json({success:false,data:'user not added'})
    }
    // return({error:'error occured'})
}

exports.get=async(req,res)=>{
    var id=req.params.id;
    console.log(id);
    var user= await userService.getUser(id);
    if(user.success){
        res.status(200).json({ user});
    }
    else{
        res.status(400).json({success:false, data:'user not found'})
    }
}

exports.update=async(req,res)=>{
    var id=req.params.id;
    console.log(id);
    
}

exports.getList=async(req,res)=>{
    var users=userService.getUsers();
    if(users.success){
        console.log('user data===========',users.data);
        res.status(200).json(users.data)
        
    }
    else{
        console.log(users.error);
        
        res.status(400).json({success:false, data:'users not found'})
}}