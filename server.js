const { application } = require("express");
const express = require("express");

const server = express();

server.get("/",function (req,res){
    res.sendFile(__dirname + "/GenderAPI.html");
});

//server.use(express.static('public'));

server.listen(3000,function () {
    console.log("http://localhost:3000");
});