var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

// TODO: add connection to mongodb

var db = MongoClient.connect(mongo_URI, function(error, db_connect) {
        db = db_connect;
});

app.get('/', function(req, res) {
	// TODO: add things 
});

// TODO: add other get functions...?

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000);
