var http=require("http");
var fs=require("fs");

http.createServer(function(request,response){
   console.log(`Запрошенный адрес: ${request.url}`);

   if (request.url.startsWith("/public/")) {

      //получаем путь после слеша
      var filePath=request.url.substr(1);
      fs.readFile(filePath, function(error,data){
         if (error) {
            response.statusCode=404;
            response.end(data);
         }
         else {
            response.end(data);
         }
         return;
      })
   }
   else {
      response.end("hello world!");
   }
}).listen(3000);
