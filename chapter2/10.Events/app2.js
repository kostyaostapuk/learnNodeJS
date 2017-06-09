//Подключаем модуль, который позволяет работать с событиями
var emmiter=require("events");

//Создадим новое событие
var eventName="boost";

//С помощью функции eventEmmiter.on() к определенному событию
//по имени цепляется функция обработчика

emmiter.on(eventName, function(data){
   console.log(data);
});

emmiter.emit(eventName,"Привет мир!");
