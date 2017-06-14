var express=require("express");
var bodyParser = require("body-parser");
var mongoClient=require("mongodb").MongoClient;
var objectId=require("mongodb").ObjectID;

var app=express();
var jsonParser=bodyParser.json();
var url= "mongodb://localhost:27017/usersdb";

app.use()
