const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

//linking to MongoDB Atlas
mongoose.connect("mongodb+srv://carlosra0345:oNsm9wKksa0BEeet@cluster0.widmf4b.mongodb.net/signupDB",{useNewUrlParser:true}, {useUnifiedTopology: true});


//creating data schema
const notesSchema = {
    title : String,
    content : String
}

const Note = mongoose.model("Note", notesSchema);



app.get("/", function(req,res){
    //res.send("express is working")
    res.sendFile("signup.html");
})

//app.post request
app.listen(3000,function(){
    console.log("server is running on 3000");
})