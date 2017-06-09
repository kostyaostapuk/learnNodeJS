var greeting1=require("./greeting.js"); //Подключаем модуль greeting.js
console.log(`Hello ${greeting1.name}`);

var greeting2=require("./greeting.js"); //Подключаем модуль greeting.js
greeting2.name="Bob";                   //Изменяем значение name моудля greeting.js

console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`); //greeting1 тоже изменилось


/*
   Использование модуля index.js
*/
welcome=require("./welcome");

welcome.getMorningMessage();
welcome.getEveningMessage();
