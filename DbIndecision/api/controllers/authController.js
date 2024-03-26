//Controlleur : authController
//
//Auteur Alain Dubé
//(c)2024 École Du Web
//
//Controlleur pour gérer les authentifications
//
// === resources mongodb

//Reference
//https://www.youtube.com/watch?v=NPJms-kg2F8

//Json Web Token

const bcrypt = require("bcrypt");
//var jwt = require("jsonwebtoken");
var jwtUtil = require("../util/utils.js");


const mongooseUser = require("../models/usersModel.js");


////////////////////////////////////////////////////
exports.getAppToken = async function (req, res) {
  console.log("auth/getAppToken");

  const numero = req.body.numero;
  const pass = req.body.pass;
  const user = { uname: numero };

  // Validate user input
  if (!numero || !pass) {
    return res.status(400).send({ message: "All input is required" });
  }

  //Verifier si on l'authorise
  if (
    numero != process.env.CREATION_APPLICATION_TOKEN_NUMERO ||
    pass != process.env.CREATION_APPLICATION_TOKEN_PASS
  )
    return res.status(401).send({ message: "Ask administrator for access" });

  const accessToken = jwtUtil.generateAppToken(user);
  res.json({ AppToken: accessToken });
};

////////////////////////////////////////////////////

exports.register = async function (req, res) {
  try {
    // Get user input
    const {
      numero,
      password,
      nom,
      prenom,
      Questionnaires,
    } = req.body;

    // Validate user input
    if (!(numero && password && nom && prenom && Questionnaires)) {
      console.log("Missing required fields");
      return res.status(400).send({ message: "All input is required" });
    }

    // Check if the request has the correct appKey
    if (!jwtUtil.verifyApplicationToken(req.body.appKey)) {
      return res.status(401).send({ message: "Invalid Application Token" });
    }

    // Hash the user's password
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    // Construct the new user object
    const newUser = {
      numero: numero.toLowerCase(), // sanitize
      password: encryptedUserPassword,
      nom: nom,
      prenom: prenom,
      Questionnaires: Questionnaires,
    };

    // Generate access and refresh tokens for the new user
    newUser.token = jwtUtil.generateAccessToken({ numero });
    newUser.refreshToken = jwtUtil.generateRefreshToken({ numero });

    // Check if the user already exists
    mongooseUser.findOne({ numero })
      .then((user) => {
        if (user) {
          return res.status(409).send({ message: "User already exists. Please log in" });
        } else {
          // Add the new user to the database
          mongooseUser.create(newUser)
            .then((result) => {
              console.log("New user added successfully");
              return res.status(201).json(newUser);
            })
            .catch((err) => {
              console.log("Error while adding new user: ", err);
              return res.status(500).send({ message: "Error while adding new user" });
            });
        }
      })
      .catch((err) => {
        console.log("Error checking if user exists: ", err);
        return res.status(500).send({ message: "Internal Server Error" });
      });
  } catch (err) {
    console.log("Error in register function: ", err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};


/////////////////////////////////////////////////////
// Demande un LOGIN
exports.login = async function (req, res) {
  // Our login logic starts here
  try {
    // Get user input
    const { numero, pass, appKey } = req.body;

    // Validate user input
    if (!numero || !pass) {
      return res.status(400).send({ message: "All input is required" });
    }

    //Check si la demande à la bonne appKey
    if (!jwtUtil.verifyApplicationToken(appKey))
      return res.status(401).send({ message: "Invalid Application Token" });

    // Validate if user exist in our database
    const user = await mongooseUser.findOne({ numero });
    if (user && (await bcrypt.compare(pass, user.password))) {
      // Create token
      const token = jwtUtil.generateAccessToken({
        user_id: user.id,
        numero,
      });
      const refreshToken = jwtUtil.generateRefreshToken({
        user_id: user.id,
        numero,
      });

      // save user token
      user.token = token;
      user.refreshToken = refreshToken;

      // user
      return res.status(200).json(user);
    }
    return res.status(400).send({ message: "Invalid Credentials" });
  } catch (err) {
    console.log(err);
  }
};

/////////////////////////////////////////
// Demande un RESET des usagers
exports.resetAll = async function (req, res) {
  console.log("auth/resetAll");
  
  const { appKey } = req.body;
  const adminNumero = process.env.SUPER_ADMIN_NUMERO; // Exemple: "admin123"
  const adminPasswordRaw = process.env.SUPER_ADMIN_PASS; // Exemple: "securePassword123"
  
  // Validation des entrées
  if (!appKey || !adminNumero || !adminPasswordRaw) {
    return res.status(400).send({ message: "Missing required inputs or configuration." });
  }
  
  // Vérification de l'AppKey (Ceci devrait être adapté à votre logique de vérification)
  if (!jwtUtil.verifyApplicationToken(appKey)) {
    return res.status(401).send({ message: "Invalid Application Token" });
  }
  
  // Hashage du mot de passe
  const adminPassword = await bcrypt.hash(adminPasswordRaw, 10);
  
  // Création de l'objet utilisateur admin
  const adminUser = {
    numero: adminNumero,
    password: adminPassword,
    // Assurez-vous d'inclure tous les autres champs requis par votre schéma ici
  };

  try {
    // Suppression de tous les utilisateurs existants
    await mongooseUser.deleteMany({});
    console.log("All users deleted");

    // Ajout du nouvel utilisateur admin
    await mongooseUser.create(adminUser);
    console.log("New admin user added");
    res.status(201).send({ message: "All users deleted and new admin user added" });
  } catch (error) {
    console.error("Error while processing resetAll:", error);
    res.status(500).send({ message: "Error while processing resetAll", error: error.message });
  }
};
