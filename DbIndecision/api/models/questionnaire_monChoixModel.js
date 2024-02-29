//Modèle : Questionnaire_monChoix
//
//Auteur Chalons David
//
//Modèle pour gérer le Questionnaire monChoix
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
            },
            "but": {
                "type": "String"
            }
    }
    },
    "piedPage": {
        "type": "String"
    },
    "questions": {
        "type": ["jsonObject"],
        "properties": {

            "facteur": {
                "type": "String"
            },
            "questions": {
                "type": ["String"]
            }
    }
    }
    });

  var mongooseQuestionnaire_monChoix = mongoose.model("questionnaire_monChoix", indecisionSchema);

  module.exports = mongooseQuestionnaire_monChoix;
