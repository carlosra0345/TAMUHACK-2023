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


//HTTP Protocol request for root route(signup.html)
app.get("/", function(req,res){
    //res.send("express is working")
    res.sendFile(__dirname + "/login.html");
})

//sending HTTP information for login page
app.get("/signup.html",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

//HTTP request for home page
app.get("/html/home.html",function(req,res){
    res.sendFile(__dirname + "/html/home.html");
})

//HTTP request for about page
app.get("/html/about.html",function(req,res){
    res.sendFile(__dirname + "/html/about.html");
})

//HTTP request for update page
app.get("/html/update.html",function(req,res){
    res.sendFile(__dirname + "/html/update.html");
})

//HTTP request for courses page
app.get("/html/courses.html",function(req,res){
    res.sendFile(__dirname + "/html/courses.html");
})

//HTTP request for profile page
app.get("/html/profile.html",function(req,res){
    res.sendFile(__dirname + "/html/profile.html");
})

//HTTP request for playlists
app.get("/html/playlist1.html",function(req,res){
    res.sendFile(__dirname + "/html/playlist1.html");
})
app.get("/html/playlist2.html",function(req,res){
    res.sendFile(__dirname + "/html/playlist2.html");
})
app.get("/html/playlist3.html",function(req,res){
    res.sendFile(__dirname + "/html/playlist3.html");
})
app.get("/html/playlist4.html",function(req,res){
    res.sendFile(__dirname + "/html/playlist4.html");
})
app.get("/html/playlist5.html",function(req,res){
    res.sendFile(__dirname + "/html/playlist5.html");
})
app.get("/html/playlist6.html",function(req,res){
    res.sendFile(__dirname + "/html/playlist6.html");
})


//HTTP request for watch-interest playlists
app.get("/html/watch-interest1.html",function(req,res){
    res.sendFile(__dirname + "/html/watch-interest1.html");
})
app.get("/html/watch-interest2.html",function(req,res){
    res.sendFile(__dirname + "/html/watch-interest2.html");
})
app.get("/html/watch-interest3.html",function(req,res){
    res.sendFile(__dirname + "/html/watch-interest3.html");
})
app.get("/html/watch-interest4.html",function(req,res){
    res.sendFile(__dirname + "/html/watch-interest4.html");
})

//IF VIDEOS DO NOT WORK, KEEP MAKING APP ROUTES TO VIDEO HTML







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