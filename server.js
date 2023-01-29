const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

//linking to MongoDB Atlas
mongoose.connect("mongodb+srv://carlosra0345:oNsm9wKksa0BEeet@cluster0.widmf4b.mongodb.net/signupDB",{useNewUrlParser:true}, {useUnifiedTopology: true});


//creating data schema
const notesSchema = {
    firstName : String,
    lastName : String,
    userEmail : String,
    userPassword : String
}

const Note = mongoose.model("Note", notesSchema);


//HTTP Protocol requests
app.get("/", function(req,res){
    //res.send("express is working")
    res.sendFile(__dirname + "/signup.html");
})

//sending HTTP information for login page
app.get("/login.html",function(req,res){
    res.sendFile(__dirname + "/login.html");
})

//HTTP request for home page
app.get("/html/home.html",function(req,res){
    res.sendFile(__dirname + "/html/home.html");
})

//HTTP request for about page
app.get("/html/about.html",function(req,res){
    res.sendFile(__dirname + "/html/about.html");
})

//HTTP request for courses page
app.get("/html/courses.html",function(req,res){
    res.sendFile(__dirname + "/html/courses.html");
})

//HTTP request for playlist1
app.get("/html/playlist1.html",function(req,res){
    res.sendFile(__dirname + "/html/playlist1.html");
})
app.get("/html/watch-interest1.html",function(req,res){
    res.sendFile(__dirname + "/html/watch-interest1.html");
})
app.get("/html/playlist2.html",function(req,res){
    res.sendFile(__dirname + "/html/playlist2.html");
})
app.get("/html/watch-interest2.html",function(req,res){
    res.sendFile(__dirname + "/html/watch-interest2.html");
})





//database posting to mongoDB cloud server
app.post("/", function(req,res){
    let newNote = new Note({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword
    });
    newNote.save();
    res.redirect('/'); //redirection after submitting form
})

//linking static files as public to the client
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'html'))); //linking main pages

//app.post request
app.listen(3000,function(){
    console.log("server is running on 3000");
})