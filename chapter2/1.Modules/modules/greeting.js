console.log("===greeting module===");

//11:43
var currentDate=new Date();

//Объявляем модуль.экспорт, чтобы переменная была доступна из вне модуля
module.exports.date=currentDate;

/*
   module - предоставляет ссылку на текущий модуль
   exports - свойство, которое определяет все свойства и методы модуля,
   которые могут быть экспортированы и использованы в других моудлях
*/

//module.exports. - позволяет использовать наш метод из вне!!!
module.exports.getMessage=function(name){
   var hour=currentDate.getHours();
   if(hour>16){
         return "Добрый вечер, "+name;
   }
   else if(hour>10){
      return "Добрый день, "+name;
   }
   else {
      return "Доброе утро, "+name;
   }
}
