//Modèle : Questionnaire_moyenPourReussir
//
//Auteur Chalons David
//
//Modèle pour gérer le Questionnaire moyenPourReussir
//
var MongoClient = require('mongodb').MongoClient;
var dbname = global.gConfig.database;
var url = global.gConfig.databaseUrl + dbname;

var mongoose = require("mongoose");
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

var questionnaire_moyenPourReussirSchema = new mongoose.Schema({
    "titre": {
        "type": "String"
    },
    "sousTitre": {
        "type": "String"
    },
    "instruction": {
        "type": "String"
    },
    "piedPage": {
        "type": "String"
    },
    "sousPiedPage": {
        "type": ["jsonObject"],
        "properties": {
            "nom": {
                "type": "String"
            },
            "titre": {
                "type": ["String"]
            }
        }
    },
    "questionsMoyensReussite": {
        "type": ["jsonObject"],
        "properties": {

            "facteur": {
                "type": "String"
            },
            "titre": {
                "type": "String"
            },
            "actions": {
                "type": ["String"]
            },
            "ressources": {
                "type": ["String"]
            }
    }
    }
    });

  var mongooseQuestionnaire_moyenPourReussir = mongoose.model("questionnaire_moyenPourReussir", questionnaire_moyenPourReussirSchema);

  module.exports = mongooseQuestionnaire_moyenPourReussir;
