const models = require('../Models/Models')
// get the book
const getbook = (req,resp)=>{
    models.book.find({},(err,data)=>{
        if (error) return resp.send({'error':'error'})
        return resp.send({'data':data})
    })

    resp.json({'you go the book':'true'})
}
// upload the book
const uploadbook = (req,resp)=>{
    let newBook = new models.book({
          bookname: req.book.name,
          image: req.file.path,

    })
    newBook.save((error,data)=>{
        if (error) return resp.send({'error':'error'})
        else return resp.send({done:'done'})
    })
    
}

module.exports={
    getbook,
    uploadbook
}