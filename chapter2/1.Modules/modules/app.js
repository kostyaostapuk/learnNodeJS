var os =require("os");
//11:39
//Подключаем файл greeting.js
var greeting=require("./greeting");

//получим имя текущего пользователя
var userName=os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

//13:12
//Подключаем файл user.js
var user=require("./user");

Kostya=new user("Kostya",19);
Kostya.sayHi();
