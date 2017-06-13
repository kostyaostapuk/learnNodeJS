//Connection express
var express=require("express");

//Create object application
var app=express();

//Determine the handler for the route
app.get("/",function(request,response){
      //send answer
      response.send("<h2>Привет Express!</h2>");
});
app.get("/about",function(request,response){
      response.send("<h2>О сайте</h2>");
});
app.use("/user",function(request,response,next){
   console.log("Route /");
   response.send("Hello");

});
app.listen(3007);
