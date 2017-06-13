//Connection express
var express=require("express");
var fs=require("fs");

//Create object application
var app=express();

//Determine the handler for the route
app.use(function(request,response,next){

   var data=new Date().getDate();
   fs.appendFile("server.log",data);
   next();
});
app.use(function(request,response,next){

   console.log("Middleware 2");
   next();
});
app.get("/", function(request, response){

   console.log("Route /");
   response.send("Hello");
});
app.listen(3000);
