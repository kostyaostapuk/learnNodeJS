//Connection express
var express=require("express");

//Create object application
var app=express();

//Determine the handler for the route
app.get("/",function(request,response){

   //Send answer
   response.send("<h2>Привет Express!</h2>");
});
app.get("/about",function(request,response){

   response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response){

    response.send("<h1>Контакты</h1>");
});
app.listen(3000);
