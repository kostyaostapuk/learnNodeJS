var express=require("express");
var bodyParser = require("body-parser");
var fs=require("fs");

var app=express();
var jsonParser=bodyParser.json();

app.use(express.static(__dirname+"/public"));

//получение списка данных
app.get("/api/users", function(request,response){
   var content=fs.readFileSync("users.json","utf8");
   var users=JSON.parse(content);
   response.send(users);
})

app.get("/api/users/:id", function(request,response){
   var id =request.params.id;
   var content=fs.readFileSync("users.json","utf8");
   var users=JSON.parse(content);
   var user=null;

   //находим в массиве пользователя по id
   for (var i = 0; i < users.length; i++) {
      if (users[i].id==id) {
         user=users[i];
         break;
      }
   }
   //отправляем пользователя
   if (user) {
      response.send(user);
   }
   else {
      response.status(404).send();
   }
})
//получение отправленных данных
app.post("/api/users",jsonParser, function(request,response){
   if (!request.body) {
      return response.sendStatus(400);
   }
   var userName=request.body.name;
   var userAge=request.body.age;
   var user={name:userName,age: userAge};

   var data=fs.readFileSync("user.json","utf8");
   var users=JSON.parse(data);

   //находим максимальный id
   var id =Math.max.apply(Math,users.map(function(o){return o.id;}))

   users.id=id+1;

   //добавляем пользователя в массив
   user.push(user);
   var data=JSON.stringify(users);

   //перезаписываем файл с новыми данными
   fs.writeFileSync("users.json",data);
   res.send(user);
});
// удаление пользователя по id
app.delete("/api/users/:id", function(request, response){

   var id = request.params.id;
   var data = fs.readFileSync("users.json", "utf8");
   var users = JSON.parse(data);
   var index = -1;
   // находим индекс пользователя в массиве
   for(var i=0; i<users.length; i++){
      if(users[i].id==id){
           index=i;
           break;
      }
   }
   if(index > -1){
      // удаляем пользователя из массива по индексу
      var user = users.splice(index, 1)[0];
      var data = JSON.stringify(users);
      fs.writeFileSync("users.json", data);
      // отправляем удаленного пользователя
      response.send(user);
   }
   else{
      response.status(404).send();
   }
});
// изменение пользователя
app.put("/api/users", jsonParser, function(request, response){

   if(!request.body) return res.sendStatus(400);

   var userId = request.body.id;
   var userName = request.body.name;
   var userAge = request.body.age;

   var data = fs.readFileSync("users.json", "utf8");
   var users = JSON.parse(data);
   var user;
   for(var i=0; i<users.length; i++){
      if(users[i].id==userId){
           user = users[i];
           break;
      }
   }
   // изменяем данные у пользователя
   if(user){
      user.age = userAge;
      user.name = userName;
      var data = JSON.stringify(users);
      fs.writeFileSync("users.json", data);
      response.send(user);
   }
   else{
      response.status(404).send(user);
   }
});

app.listen(3000, function(){
   console.log("Сервер ожидает подкелючения...");
})
