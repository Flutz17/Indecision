//Modèle : Questionnaire_monProgramme
//
//Auteur Chalons David
//
//Modèle pour gérer le Questionnaire monProgramme
//
var MongoClient = require('mongodb').MongoClient;
var dbname = global.gConfig.database;
var url = global.gConfig.databaseUrl + dbname;

var mongoose = require("mongoose");
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

var indecisionSchema = new mongoose.Schema({
    "titre": {
        "type": "String"
    },
    "directive": {
        "type": "jsonObject",
        "properties": {

            "titre": {
                "type": "String"
            },
            "objectif": {
                "type": ["String"]
            }
    }
    },
    "piedPage": {
        "type": "String"
    },
    "questionsProgrammeEtudes": {
        "type": ["jsonObject"],
        "properties": {

            "type": {
                "type": "String"
            },
            "id": {
                "type": "String"
            },
            "titre": {
                "type": "String"
            },
            "soustitre": {
                "type": "String"
            },
            "questions": {
                "type": ["jsonObject"],
                "properties": {
        
                    "id": {
                        "type": "String"
                    },
                    "enonce": {
                        "type": "String"
                    }
            }
            }
    }
    }
    });

  var mongooseQuestionnaire_monProgramme = mongoose.model("questionnaire_monProgramme", indecisionSchema);

  module.exports = mongooseQuestionnaire_monProgramme;
