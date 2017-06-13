var express=require("express");
var app=express();

app.get("/products/:productId/:userId",function(request,response){
   response.send("params: "+request.params["productId"]+" "+request.params["userId"]);
});

app.listen(3001);
