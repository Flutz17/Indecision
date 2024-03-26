//Modèle : Ressources
//
//Auteur Chalons David
//
//Modèle pour gérer le Ressources
//
var MongoClient = require('mongodb').MongoClient;
var dbname = global.gConfig.database;
var url = global.gConfig.databaseUrl + dbname;

var mongoose = require("mongoose");
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

var ressourceSchema = new mongoose.Schema({
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

  var mongooseRessources = mongoose.model("ressource", ressourceSchema);

  module.exports = mongooseRessources;
