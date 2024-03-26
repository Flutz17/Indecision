//Modèle : Users
//
//Auteur Chalons David
//
//Modèle pour gérer le Users
//
var MongoClient = require("mongodb").MongoClient;
var dbname = global.gConfig.database;
var url = global.gConfig.databaseUrl + dbname;

const mongoose = require("mongoose");

console.log(url);

mongoose.connect(url);
console.log("DB connection successful.");


var userSchema = new mongoose.Schema({
    "id": {
      "type": "String"
    },
      "numero": {
        "type": "String",
        "unique": "true",
        "required": "true",
        "minlength": "7",
        "maxlength": "7"
      },
      "password": {
        "type": "String",
        "required": "true",
        "minlength": "6"
      },
      "token": {
        "type": "String",
      },
      "nom": {
        "type": "String"
      },
      "prenom": {
        "type": "String"
      },
      "Questionnaires": {
          "monProgrammeEtudes": [{
              "id": {
              "type": "String"
              },
              "facteur": {
              "type": "String"
              },
              "reponse": {
              "type": "String"
              }
          }],
          "monChoixProgramme": {
              "reponsesPositives": {
              "type": ["String"]
              },
              "reponsesNegatives": {
              "type": ["String"]
              }
          },
          "moyensPourReussir": {
              "actionReponses": {
              "type": ["String"]
              },
              "ressourcesReponses": {
              "type": ["String"]
              }
          }
      }
    });

  var mongooseUsers = mongoose.model("user", userSchema);

  module.exports = mongooseUsers;
