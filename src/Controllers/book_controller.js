// get the book
const getbook = (req,resp)=>{
    resp.json({'you go the book':'true'})
}
// upload the book
const uploadbook = (req,resp)=>{
    resp.json({'uploaded book':req.body});
    
}

module.exports={
    getbook,
    uploadbook
}