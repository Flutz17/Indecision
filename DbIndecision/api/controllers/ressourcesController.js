const mongooseRessource = require("../models/ressourcesModel");

var express = require("express"),
  app = express(),
  port;
app.use(express.json());

exports.clearAll = function (req, res) {
    mongooseRessource
    .deleteMany({})
    .then(() => {
      console.log("les ressources sont supprimer");
      return res.status(200).json({ message: "les ressources sont supprimer" });
    })
    .catch((err) => {
      console.log("Error sur l'effacement des ressources: " + err);
      res.status(500).json({ message: "An unknown error has occured" });
    });
};

exports.add = async function (req, res) {
  try {
    var arrayJsonObj = Array.isArray(req.body) ? req.body : [req.body];
    let itemsAdded = 0;

    for (let jSonObj of arrayJsonObj) {
      console.log(jSonObj);
      const existingRessource = await mongooseRessource.findOne({ ressource: jSonObj.ressource });
      console.log(existingRessource);
      if (!existingRessource) {

        console.log(jSonObj);

        var ressourceObj = new mongooseRessource(jSonObj);
        await mongooseRessource.create(ressourceObj).then((result) => {
          console.log("Ressource inserer: " + ressourceObj.ressource);
        });
        itemsAdded++;
      }
    }
    res.status(200).json({ message: itemsAdded + " Ressource(s) inserer" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur de traitement" });
  }
  return;
};

exports.getAll = function (req, res) {
  mongooseRessource
    .find({}, { id: 1, type: 1, ressource: 1})
    .sort({ ressource: "asc" })
    .exec()
    .then((db) => {
      console.log("\t  Contenu de la base de données ressource:\n");
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
    : { ressource: req.params.id };
  mongooseRessource
    .find(reqq)
    .exec()
    .then((db) => {
      console.log("\t  Contenu de la base de données ressources:\n", db);
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
    : { ressource: req.params.id };
  mongooseRessource
    .findOneAndDelete(reqq)
    .then((db) => {
      if (!db) {
        console.log("Ressource n'existe pas: " + req.params.id);
        return res.status(410).json({ message: "Ressource n'existe pas" });
      }
      console.log("l'ressource a bien été supprimer" + req.params.id);
      res.status(200).json({ message: "l'ressource a bien été supprimer" });
    })
    .catch((err) => {
      console.error("erreur lier avec l'ressource: " + err);
      res.status(500).json({ error: "An unknown error has occured" });
    });
};