var express = require("express")
var http = require('http');
var path = require('path');
var views_folder = path.join(__dirname,"./views")
var app = express()
var port = process.env.PORT||8000
var server = http.createServer(app)
console.log(views_folder)

var users = [{name_user:"User1",age:11},
            {name_user:"User2",age:11},
            {name_user:"user3",age:11}
] 

app.set("view engine","pug")
app.set('views',views_folder);

app.get("/",(req,res)=>{
    res.render("index",{title : "home"})
})

app.get("/users",(req,res)=>{
    res.render("user_page",{user:users})
})

app.get("/users/search",(req,res)=>{
    var name_user = req.query.name
    console.log(req.query);
    if (req.query.age){
        var age_search = req.query.age
    }else{
        var age_search = "0"
    }
    var result = users.filter((user)=>{
        return user.name_user.toLowerCase().indexOf(name_user.toLowerCase()) !== -1 && user.age >= parseInt(age_search)
    })
    console.log(result)
    res.render("user_page",{result:result})
})

server.listen(port,()=>{
    console.log("app is start in port : "+port)
})

