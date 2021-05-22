const models = require('../Models/Models')

//borrow model
const borrow=(req,resp)=>{
    let newBorrow = models.borrow({
        borrower: req.body.userid,
        bookid: req.body.bookid

    })
    newBorrow.save((error,data)=>{
        if(error) return resp.send({'unknownerror':'error'})
        return resp.send({'done':'done'})
    })
}

const retured = (req,resp)=>{

}

// all the borrowed record
const borrowedrecord = (req,resp)=>{
    models.borrow.find({},(err,data)=>{
        if(err) res.send({'err':'error'})
        return res.send({'data':data})
    })
}

module.exports = {
    borrow,
    borrowedrecord
}