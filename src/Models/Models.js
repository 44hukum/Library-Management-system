// MONGOOSE ODM FOR LIBRARY MANAGEMENT SYSTEM

const mongoose = require("mongoose")

// user schema
let userSchema =new mongoose.Schema({
    username:String,
    password: String,
    user_type:{
        type:String,
        "enum":['user','staff','admin'],
        default:'user',
        registered_date: {
            type:Date,
            default: Date.now
        }
    }
})

//book schema
let bookSchema = new mongoose.Schema({
    bookname:String,
    writer:String,
    featuredImage:String,
    uploadeddate:{
        type:Date,
        deault:Date.now
    },
    isAvailable:{
        type:Boolean,
        deault: true
    }    
})

// borrow scheme
let borrowSchema =new mongoose.Schema({
    lendby:String,
    bookid:String,
    returned:{
        type:Boolean,
        default:false
    },
    return_date:{
        type:Date,
        default: Date.now() + 14*24*60*60*1000
    },
    borrowedDate:{
        type:Date,
        default: Date.now()
    },
    remainingdate:{
        type:Date,
        default: this.return_date - this.borrowedDate
    }  
})

// models 
let user=new mongoose.model("user", userSchema);
let book=new mongoose.model("book", bookSchema);
let borrow=new mongoose.model("borrow", borrowSchema);

// exports
module.exports ={
    uer,
    book,
    borrow
}