const models = require('../Models/Models')

// get the book
const getUser = (req,resp)=>{
    models.user.find({},(error,data)=>{
        if(error) return resp.send({error:'error'})
        return resp.send({'data':data});
    })
}

// upload the book
const registerUser = (req,resp)=>{
    models.user.findOne({username:req.body.username},(err,data)=>{
        if(err) return resp.send({'e':err})
        if(data == null){
            if(req.body.type){
                let newuser=new models.user({
                        username: req.body.username,
                        password: req.body.password,
                        user_type: req.body.type
                    })
                    newuser.save((err,data)=>{
                            if(err) return resp.send({message:'error'})
                            return resp.send({message:'done'})
                    })  
                }
            else{
                    let newuser=new models.user({
                        username: req.body.username,
                        password: req.body.password,
                       
                    })
                    newuser.save((err,data)=>{
                            if(err) return resp.send({message:'error'})
                            return resp.send({message:'done with default user type'})
                    })  
                }
        } //end of if
        else{
            return resp.send({message:'user exist'})
        } //end of else
    })
     
    
} //end of the method

const deleteUser = (req,resp)=>{
        
}
module.exports={
    getUser,
    registerUser
}