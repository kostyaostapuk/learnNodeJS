var express=require("express");
var hbs=require("hbs");

var app=express();

//Устанавливаем путь к каталогу
//с частичными представлениями

hbs.registerPartials(__dirname+"/views/partials");

app.set("view engine","hbs");
app.get("/", function(request,response){
   response.render("home.hbs");
});

app.get("/contact", function(request,response){
   response.render("contact.hbs",
   {
      title: "Мои контакты",
      email: "gavgav@mycorp.com",
      phone: "+12345678"
   }
);
});
app.listen(3000);
