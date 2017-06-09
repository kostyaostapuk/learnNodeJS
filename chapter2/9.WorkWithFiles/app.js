var fs=require("fs");

//Асинхронное чтение файла
fs.readFile("file.txt","utf8",
   function(error,data){
      console.log("Асинхронное чтение файла");
      if (error) {
         throw error;   //если возникла ошибка
      }
      console.log(data);   //выводим считанные данные
   }
)


//Синхронное чтение файла
console.log("Синхронное чтение файла");
var fileContent=fs.readFileSync("file.txt","utf8");
console.log(fileContent);


//Запись в файл синхронно
fs.writeFileSync("file.txt","Новые данные для записи");

//Запись в файл асинхронно
fs.writeFile("file.txt","Привет, мир!", function(error){
   if (error) {
      throw error;
   }
   console.log("Запись файла завершена. Содержимое файла:");

   var data =fs.readFileSync("file.txt","utf8");
   console.log(data); //выводим считанные данные
});
