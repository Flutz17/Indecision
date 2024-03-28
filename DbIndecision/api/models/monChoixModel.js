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

var monChoixSchema = new mongoose.Schema({
    "titre": {
        "type": "String"
    },
    "directive": {

            "titre": {
                "type": "String"
            },
            "objectif": {
                "type": ["String"]
            },
            "but": {
                "type": "String"
            }
    },
    "piedPage": {
        "type": "String"
    },
    "questions": [{

            "facteur": {
                "type": "String"
            },
            "questions": {
                "type": ["String"]
            }
    }]
    });

  var mongoosemonChoix = mongoose.model("monChoix", monChoixSchema, "monChoix");

  module.exports = mongoosemonChoix;
