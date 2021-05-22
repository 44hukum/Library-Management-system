// get the book
const getUser = (req,resp)=>{
    resp.json({'you go the  user':'true'})
}
// upload the book
const registerUser = (req,resp)=>{
    resp.json({'user Registration':req.body});
    
}

module.exports={
    getUser,
    registerUser
}