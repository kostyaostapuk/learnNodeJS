var express=require("express");

var app=express();

var productRouter=express.Router();

productRouter.route("/")
   .get(function(request,response){
      response.send("Список товаров");
   });
productRouter.route("/:id")
   .get(function(request,response){
      response.send(`Товар ${request.params.id}`);
   });
app.use("/products",productRouter);

app.get("/",function(request,response){
   response.send("Главная страница");
});

app.listen(3002);
