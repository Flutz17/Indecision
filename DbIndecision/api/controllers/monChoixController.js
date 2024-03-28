const mongoosemonChoix = require("../models/monChoixModel");

var express = require("express"),
  app = express(),
  port;
app.use(express.json());

exports.clearAll = function (req, res) {
    mongoosemonChoix
    .deleteMany({})
    .then(() => {
      console.log("les questionnaire_monChoix sont supprimer");
      return res.status(200).json({ message: "les questionnaire_monChoix sont supprimer" });
    })
    .catch((err) => {
      console.log("Error sur l'effacement des questionnaire_monChoix: " + err);
      res.status(500).json({ message: "An unknown error has occured" });
    });
};

exports.add = async function (req, res) {
  try {
    var arrayJsonObj = Array.isArray(req.body) ? req.body : [req.body];
    let itemsAdded = 0;

    for (let jSonObj of arrayJsonObj) {
      console.log(jSonObj);
      const existingMonChoix = await mongoosemonChoix.findOne({ action: jSonObj.action });
      console.log(existingMonChoix);
      if (!existingMonChoix) {

        console.log(jSonObj);

        var actionObj = new mongoosemonChoix(jSonObj);
        await mongoosemonChoix.create(actionObj).then((result) => {
          console.log("MonChoix inserer: " + actionObj.action);
        });
        itemsAdded++;
      }
    }
    res.status(200).json({ message: itemsAdded + " MonChoix(s) inserer" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur de traitement" });
  }
  return;
};

exports.getAll = function (req, res) {
  mongoosemonChoix
    .find({}, { id: 1, titre: 1, directive: 1, titre: 1, objectif: 1, directive: 1, but: 1, piedPage: 1, questions: 1, facteur: 1, questions: 1})

    .sort({ action: "asc" })
    .exec()
    .then((db) => {
      console.log("\t  Contenu de la base de données action:\n");
      res.status(200).json(db);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
};

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

exports.get = function (req, res) {
  var reqq = isNumeric(req.params.id)
    ? { id: req.params.id }
    : { action: req.params.id };
  mongoosemonChoix
    .find(reqq)
    .exec()
    .then((db) => {
      console.log("\t  Contenu de la base de données questionnaire_monChoix:\n", db);
      res.status(200).json(db);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
};


exports.delete = function (req, res) {
  var reqq = isNumeric(req.params.id)
    ? { id: req.params.id }
    : { action: req.params.id };
  mongoosemonChoix
    .findOneAndDelete(reqq)
    .then((db) => {
      if (!db) {
        console.log("MonChoix n'existe pas: " + req.params.id);
        return res.status(410).json({ message: "MonChoix n'existe pas" });
      }
      console.log("l'action a bien été supprimer" + req.params.id);
      res.status(200).json({ message: "l'action a bien été supprimer" });
    })
    .catch((err) => {
      console.error("erreur lier avec l'action: " + err);
      res.status(500).json({ error: "An unknown error has occured" });
    });
};