var http=require("http");
var message="Hello, World!My name Kostya. I'm now in practice in the EPAM";
http.createServer(function(request,response){
   console.log(message);
   response.end(message\);

}).listen(3000,"127.0.0.1",()=>{
   console.log(`Сервер начал прослушивание запросов`);
});
