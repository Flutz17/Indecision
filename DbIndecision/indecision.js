//Exemple d'un service WEB API REST MVC
//
//Auteur : Alain Dube
//(c)2024a Ecole Du Web
//
//         Routes          Action   *Accès  *Autorisations  Description
//    /                     GET        Tous     Tous
//    api/                  GET        Tous     Tous
//    api/auth              GET        Tous     Tous          Message  : My API Auth controller. Please login.
//    api/auth/getAppToken  POST       Tous     AppUser       Demande un TOKEN d'application
//    api/auth/resetAll     POST       AppToken AppUser       Efface tous les usagers et ajoute un usager administrateur
//    api/auth/register     POST       AppToken Admin         Ajoute un usager de type user
//    api/auth/login        POST       AppToken Tous          Permet d'authentifier un usager et retourne un BearerToken et un RefrershToken
//    api/auth/showAllUsers GET        Tous     User          Retourne tous les usagers
//    api/auth/type         PUT        Tous     Admin         Permet de changer le type d'usager (admin ou user)
//
//  *AppUser :  voir dans .env CREATION_APPLICATION_TOKEN_PASS et CREATION_APPLICATION_TOKEN_PASS
//  *AppToken : généré par l'action getAppToken
//
//
//Informations
//1.    Installation des modules suivants:
//    npm install -g npm
//    npm install express --save
//      Express est un cadre d'application Web Node.js minimal et flexible qui fournit un ensemble robuste de fonctionnalités pour les applications Web et mobiles.
//    npm install -g nodemon
//      nodemon est un outil qui aide à développer des applications basées sur Node.js en redémarrant automatiquement l'application de nœud lorsque des modifications de fichiers dans le répertoire sont détectées.
//    npm install mongodb
//      Le pilote MongoDB officiel pour Node.js.
//    npm install bcrypt
//      Une bibliothèque pour vous aider à hacher des mots de passe.
//    npm install jsonwebtoken
//      Outils pour s'identifier jwt
//    npm install mongoose
//      Le package Mongoose.
//    npm install dotenv
//      Le package cors pour lire dans le .env
//    npm install cors
//      Le package cors pour les appels externes (Cross-Origin Ressource Sharing)
//    npm install -g forever
//      Forever est un package node.js qui est utilisé pour maintenir le serveur en vie même lorsque le serveur plante/s'arrête. Lorsque le serveur de nœud est arrêté en raison d'une erreur, d'une exception, etc., il redémarre automatiquement.
//      Utilisation :
//        Démarrer l'application:     foever server.js
//        Démarrer comme service :      forever start server.js
//        List all process:         forever list
//        To stop:             forever stop 0
//        To start:             forever restart 0
//        Redémarrer si fichier modifié: forever -w woods.js
//    npm install swagger-ui-express
//    npm install swagger-jsdoc
//      Swagger est un outil logiciel utilisé pour concevoir, créer, documenter et utiliser des API RESTful.
//      Utilisation :
//        https://www.youtube.com/watch?v=7MS1Z_1c5CU
//      Autres inspirations :
//        https://github.com/azizkale/Swagger-in-NodeJS
//2.  Lancer le service WEB : nodemon node.js
//3.  Appeler le service avec votre PostMan (ou Insomnia) : localhost:3000
//4.  Exemples d'appels
//5.    localhost:3000/api/auth/login (POST)
//
//
//Pour lancer le mongod en thread
// .      mongod --fork --logpath /var/log/mongodb/mongod.log
//
//
//Pour demarer en deamon (en processus)
// .  //https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9
// .  npm install pm2@latest -g
// .  Utilisation
// .    pm2 start schluter.js
//      pm2 startup systemd //Pour générer un script qui redemarre le processus au démarrage
//      pm2 stop app_name_or_id
//      pm2 restart app_name_or_id
//      pm2 list
//      pm2 info app_name
//
// Automatique documentation avec Swagger
// https://www.youtube.com/watch?v=7MS1Z_1c5CU
// Autres inspirations :
//      https://github.com/azizkale/Swagger-in-NodeJS
//
// Outil intéressant pour tester l'API REST :
//     Plug-IN : vscode-restclient (Huachao)
//     Voir les fichiers *.http à la racine
//
// Notes importantes
//     Il faut avoir un fichier .env pour configurer les accès
//     NE PAS OUBLIER DE CHANGER CES DONNEES SELON VOS BESOINS
//     NE PAS GARDER CES VALEURS POUR UNE QUESTION DE SECURITÉ
//      ;Accès pour la création du token d'application
//      ACCESS_TOKEN_SECRET = SALT_ceciEstUnephraseSecretSeulementPourAg360
//      REFRESH_TOKEN_SECRET = SALT_ceciEstUnephraseSecretSeulementPourRefresh
//      CREATION_APPLICATION_TOKEN_PASS = secretPassword123
//      CREATION_APPLICATION_TOKEN_EMAIL = secretEmail@cegeprdl.ca
//      SUPER_ADMIN_EMAIL = admin@admin.com
//      SUPER_ADMIN_PASS = EcoleDuWeb
//
// Références intéressantes:
//  Comment authentifier les utilisateurs et implémenter CORS dans les applications Node.js
//  https://www.freecodecamp.org/news/how-to-authenticate-users-and-implement-cors-in-nodejs-applications/
// A Faire :
//    HTTPS : voir https://www.youtube.com/watch?v=BLdTUNKTmhs
//

const config = require("./config.json");
//const { SMTPServer } = require("smtp-server");
//const nodemailer = require("nodemailer");
const environmentConfig = config["development"];
global.gConfig = environmentConfig;
var port = global.gConfig.node_port;
var database = global.gConfig.database;
var urlApi = global.gConfig.urlApi;

const cors = require("cors"); //Pour lire les informations du .env
require("dotenv/config");

var express = require("express"),
  app = express(),
  port;

app.use(cors()); //Pour lire les informations du .env
app.use(express.json());

/*const server = new SMTPServer({
  // Example SMTP server options
  secure: false,
  onAuth(auth, session, callback) {
    console.log("SMTPServer onAuth");
    // Accept any authentication
    return callback(null, { user: "user" });
  },
});*/

//Swagger part (documentation)
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Schluter API v(1.0)",
      version: "1.0.0",
      description: "Indecision Api",
      contact: {
        name: "Alain Dubé",
        url: "https://cegeprdl.ca",
        email: "2131317@cegeprdl.ca",
      },
      servers: ["http://localhost:3000"],
    },
  },
  apis: ["./api/routes/*.js"],
  tags: [
    {
      name: "User",
      description: "Endpoints",
    },
  ],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/myApiDocs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//Toutes les routes pour l'authentification sont définies dans le fichier authRoutes.js
var authRoutes = require("./api/routes/authRoutes.js");
app.use("/api/auth", authRoutes);

var logRoutes = require("./api/routes/logRoutes.js");
var actionRoutes = require("./api/routes/actionRoutes.js");

app.use("/api/log", logRoutes);
app.use("/api/actions", actionRoutes);

//Route par défaut
app.get("/", (req, res) => {
  res.status(200).json({ message: "Please, call api from /api/..." });
});
app.get("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).json({ message: "Please, call api from /api/..." });
});

app.get("/api/welcome", (req, res) => {
  res.status(200).send("Welcome to my API 🙌");
});

app.listen(port);

/*server.listen(NodemailerPort, () => {
  console.log(`SMTP server is running on port ${NodemailerPort}`);
});

server.on("error", (err) => {
  console.log("Error %s", err.message);
});*/
console.log("RESTful API server <" + database + "Api> and started on: " + port);
console.log("Documentation: " + urlApi + ":" + port + "/myApiDocs");
