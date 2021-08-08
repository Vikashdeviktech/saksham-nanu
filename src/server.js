const express= require("express")
const app=express()
require("../db/conn")
const hbs= require("hbs")
const path = require("path");
const template_path=path.join(__dirname,"../templates/views")
const Router=require("../router/router")

app.set("view engine","hbs");
app.set("views",template_path)
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:false}))
app.use(Router)
app.use(express.static("public"));


app.listen(8000)

