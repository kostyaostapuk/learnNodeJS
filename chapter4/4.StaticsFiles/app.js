var express=require("express");

var app =express();

app.use(express.static(__dirname+"/public"));

/*
   Дополнительно мы модем изменить путь к каталогу статических файлов
   Дописав в use параметр "/static"

   app.use("/static",express.static(__dirname+"/public"));
*/
app.get("/", function(request,response){
   response.send("<h1>Главная страница</h1>");
});

app.get("/contact",function(request,response){
   response.send("<h1>Контакты</h1>");
});
app.listen(3010);
