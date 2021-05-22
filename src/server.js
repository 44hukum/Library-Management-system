var createError = require('http-errors'); 
const express = require("express");

const app = express()

app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({
    extended:true
}))
// routes for the application
const book_route = require('./Routes/books.js')
const user_route = require('./Routes/user')


app.get('/',(req,resp)=>{
    resp.send("welcome to the wonderland")
})
app.use('/book',book_route);
app.use('/user',user_route);

// LISTEN 
const listener  =  app.listen(process.env.PORT || 3000, ()=>{
        console.log("App is up")
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send("404 sorry didnot found")
  });
  
  
  // MONGOOSE FOR MONGODB
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true }, (err, data) => {
    if (err) console.log("unknown error")
    else console.log("mongodb is up 2:: ")
  })