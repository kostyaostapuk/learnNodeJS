var http=require("http");
var fs=require("fs");

http.createServer(function(request,response){
   fs.readFile("public/index.html","utf8",function(error,data){
      var message="Изучаем Node.jssdadas";
      var header="Главная страница";
      data=data.replace("{header}",header).replace("{message}",message);
      response.end(data);
   })
}).listen(3000);
