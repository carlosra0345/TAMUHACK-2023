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



app.get("/", function(req,res){
    //res.send("express is working")
    res.sendFile(__dirname + "/signup.html");
})

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

//app.post request
app.listen(3000,function(){
    console.log("server is running on 3000");
})