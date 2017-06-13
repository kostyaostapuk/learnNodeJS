var express=require("express");

var app=express();

app.set("view engine","hbs");

app.get("/", function(request, response){
   response.send("Главная страница");
});

app.get("/info",function(request,response){
   response.render("info.hbs",
   {
      title: "Info",
      name: "Kostya",
      surname: "Ostapuk",
      number: "+375295067296"
   })
});
app.listen(3000);
