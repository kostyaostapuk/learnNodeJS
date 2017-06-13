var express=require("express");

var app=new express();

app.set("view engine","hbs");

app.get("/", function(request,response){
   response.send("Главная страница");
});

app.get("/contact",function(request,response){
   response.render("contact.hbs");
});
app.listen(3000);
