//Получаем модуль http
//Для его загрузки нужно применить метод require()
var http=require("http");

//Создаем новый сервер с помощью метода createServer()
//В качестве параметра метод принимает функцию

/*

 request - хранит информацию о запросе
 response - используме для отпправки ответа

*/


http.createServer(function(request,response) {
   response.end("Hello NodeJS");
}).listen(3000,"127.0.0.1",function(){
   console.log("Сервер начала прослушивание запросов на порту 3000");
});
