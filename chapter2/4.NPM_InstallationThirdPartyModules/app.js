//Connection module Express
var express=require("express");

//Creating application
var app=express();

//Install route handler
app.get("/", function(request,response){
   response.end("Hello from Express!");
});
//Start listening connections on 3000 port
app.listen(3000);

//Семантическое версионирование
//major.minor.path

/*
   Если в приложении или пакете обнаружен какой-то баг и он исправляется, то увеличивается на единицу число "patch".
   Если в пакет добавляется какая-то новая функциональность, которая совместима с предыдущей версией пакета, то это небольшое изменение,
   и увеличивается число "minor".
   Если же в пакет вносятся какие-то большие изменения, которые несовместимы с предыдущей версией, то увеличивается число "major".
   То есть глядя на разные версии пакетов, мы можем предположить, насколько велики в них различия.
*/
