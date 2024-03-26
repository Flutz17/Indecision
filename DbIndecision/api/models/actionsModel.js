//Modèle : Actions
//
//Auteur Chalons David
//
//Modèle pour gérer les Actions
//
var MongoClient = require('mongodb').MongoClient;
var dbname = global.gConfig.database;
var url = global.gConfig.databaseUrl + dbname;

var mongoose = require("mongoose");
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

var actionSchema = new mongoose.Schema({
    "id": {
        "type": "String"
    },
    "type": {
        "type": "String"
    },
    "action": {
        "type": "String"
    }
    });

  var mongooseAction = mongoose.model("action", actionSchema);

  module.exports = mongooseAction;
