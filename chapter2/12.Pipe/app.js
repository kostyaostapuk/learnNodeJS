/*
var fs=require("fs");

var readableStream=fs.createReadStream("hello.txt","utf8");
var writeableStream=fs.createWriteStream("some.txt");

readableStream.on("data",function(chuck){
   writeableStream.write(chuck);
})

*/

/*
   Этот код можно написать проще!
*/

var fs =require("fs");

var readableStream=fs.createReadStream("hello.txt","utf8");
var writeableStream=fs.createWriteStream("some.txt");

readableStream.pipe(writeableStream);

/*
   Сделаем архивацию файлов с помощью pipe
*/


var zlib=require("zlib");

var readableStream=fs.createReadStream("hello.txt","utf8");
var writeableStream=fs.createWriteStream("some.txt.gz");

var gzip=zlib.createGzip();
readableStream.pipe(gzip).pipe(writeableStream);
