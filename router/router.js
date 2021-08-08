var express= require("express")
var app= new express.Router()
var Signup=require("../modal/signup")
var adminModal=require("../modal/admin")

app.get("/",function(request, response){
    response.render("index")
})

app.get("/login",function(request, response){
    response.render("index")
})

app.get("/signup", function(request,response)
{
    response.render("index")
})

app.post("/signup",async function(request, response){
    try{
        console.log(request.body)
        const user= new Signup(request.body)
        console.log(user)
        const userData= await user.save()
        response.render("index")
        
    }catch(e){console.log(e)}})

app.get("/admin",function(request, response){
    response.render("index")})

app.post("/login",function(request, response){
    response.render("index")
})



app.post("/admin",function(request, response){
    response.render("registration")})




module.exports=app
