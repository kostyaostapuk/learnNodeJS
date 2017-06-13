var express=require("express");

var app=express();

app.set("view engine","hbs");

app.get("/", function(request, response){
   response.send("Главная страница");
});

app.get("/arr",function(request,response){
   response.render("arr.hbs",
   {
      title: "Info",
      name: "Kostya",
      surname: "Ostapuk",
      numberVisible: true,
      number: ["+375295067296", "+375292032423"]
   })
});
app.listen(3000);
