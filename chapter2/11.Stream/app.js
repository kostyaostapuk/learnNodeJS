//Connection module FileSystem
var fs=require("fs");

//Create writeStream
var writeableStream=fs.createWriteStream("file.txt");
writeableStream.write("Привет мир!\n");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");

//Create readStream
var readableStream=fs.createReadStream("file.txt","utf8");

readableStream.on("data", function(chunk){
   console.log(chunk);
});
