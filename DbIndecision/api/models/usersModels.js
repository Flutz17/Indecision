//Modèle : Users
//
//Auteur Chalons David
//
//Modèle pour gérer le Users
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
      "numero": {
        "type": "String"
      },
      "password": {
        "type": "String"
      },
      "nom": {
        "type": "String"
      },
      "prenom": {
        "type": "String"
      },
      "Questionnaires": {
        "type": "JsonObject",
        "properties": {
      
          "monProgrammeEtudes": {
          "type": ["JsonObject"],
          "properties": {
              "id": {
              "type": "String"
              },
              "type": {
              "type": "String"
              },
              "reponse": {
              "type": "String"
              }
          }
          },
          "monChoixProgramme": {
          "type": "JsonObject",
          "properties": {
              "reponsesPositives": {
              "type": ["String"]
              },
              "reponsesNegatives": {
              "type": ["String"]
              }
          }
          },
          "moyensPourReussir": {
          "type": "JsonObject",
          "properties": {
              "actionReponses": {
              "type": ["String"]
              },
              "ressourcesReponses": {
              "type": ["String"]
              }
          }
          }
      }
      }
    });

  var mongooseUsers = mongoose.model("user", indecisionSchema);

  module.exports = mongooseUsers;
