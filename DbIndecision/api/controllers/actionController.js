const mongooseAction = require("../models/actionsModel");

var express = require("express"),
  app = express(),
  port;
app.use(express.json());

exports.clearAll = function (req, res) {
    mongooseAction
    .deleteMany({})
    .then(() => {
      console.log("les actions sont supprimer");
      return res.status(200).json({ message: "les actions sont supprimer" });
    })
    .catch((err) => {
      console.log("Error sur l'effacement des actions: " + err);
      res.status(500).json({ message: "An unknown error has occured" });
    });
};

exports.add = async function (req, res) {
  try {
    var arrayJsonObj = Array.isArray(req.body) ? req.body : [req.body];
    let itemsAdded = 0;

    for (let jSonObj of arrayJsonObj) {
      console.log(jSonObj);
      const existingAction = await mongooseAction.findOne({ action: jSonObj.action });
      console.log(existingAction);
      if (!existingAction) {

        console.log(jSonObj);

        var actionObj = new mongooseAction(jSonObj);
        await mongooseAction.create(actionObj).then((result) => {
          console.log("Action inserer: " + actionObj.action);
        });
        itemsAdded++;
      }
    }
    res.status(200).json({ message: itemsAdded + " Action(s) inserer" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur de traitement" });
  }
  return;
};

exports.getAll = function (req, res) {
  mongooseAction
    .find({}, { _id: 1, type: 1, action: 1})
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
  mongooseAction
    .find(reqq)
    .exec()
    .then((db) => {
      console.log("\t  Contenu de la base de données actions:\n", db);
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
  mongooseAction
    .findOneAndDelete(reqq)
    .then((db) => {
      if (!db) {
        console.log("Action n'existe pas: " + req.params.id);
        return res.status(410).json({ message: "Action n'existe pas" });
      }
      console.log("l'action a bien été supprimer" + req.params.id);
      res.status(200).json({ message: "l'action a bien été supprimer" });
    })
    .catch((err) => {
      console.error("erreur lier avec l'action: " + err);
      res.status(500).json({ error: "An unknown error has occured" });
    });
};