var http=require("http");

http.createServer(function(request,response){
   response.setHeader("UserId",12);
   response.setHeader("Content-Type", "text/html");
   response.write("<h2>9:19 PM</h2>");

   response.end();
}).listen(3000, function(){
   console.log("Сервер начал работу");
});
