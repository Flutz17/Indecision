//Modèle : Questions
//
//Auteur Chalons David
//
//Modèle pour gérer le Questions
//
var MongoClient = require('mongodb').MongoClient;
var dbname = global.gConfig.database;
var url = global.gConfig.databaseUrl + dbname;

var mongoose = require("mongoose");
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

var indecisionSchema = new mongoose.Schema({
    "id": {
        "type": "String"
    },
    "type": {
        "type": "String"
    },
    "question": {
        "type": "String"
    }
    });

  var mongooseQuestions = mongoose.model("question", indecisionSchema);

  module.exports = mongooseQuestions;
