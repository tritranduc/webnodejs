var express = require("express")
var http = require('http');
var path = require('path');
var views_folder = path.join(__dirname,"./views")
var app = express()
var port = 80
var server = http.createServer(app)
console.log(views_folder)

app.set("view engine","pug")
app.set('views',views_folder);

app.get("/",(req,res)=>{
    res.render("index",{title : "home"})
})

server.listen(port,()=>{
    console.log("app is start in port : "+port)
})

