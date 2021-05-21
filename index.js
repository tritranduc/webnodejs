var express = require("express")
var http = require('http');
var app = express()
var port = 8000
var server = http.createServer(app)

app.get("/",(req,res)=>{
    res.send("ewhrh4uhgt")
})

server.listen(port,()=>{
    console.log("app is start in port : "+port)
})

