//Fichier de route pour le controleur authController
//
//Auteur : Alain Dube
//(c)2024 Ecole Du Web
//
const jwt = require("jsonwebtoken");
const routes = require("express").Router();
const authMiddleware = require("../middleware/auth");

//Fonctionnalités pour le controleur authController
const AuthController = require("../controllers/authController");

/** Swagger tag Auth
 * @swagger
 * tags:
 *  name: Auth
 *  description: Pour la gestion de l'authentification
 */

/** Swagger definition AuthDefault
 * @swagger
 * definitions:
 *  AuthDefault:
 *   type: object
 *   properties:
 *    message:
 *     type: string
 *     description: Message par défaut de l'authentification
 *     example: 'My API Auth controller. Please login.'
 */

/** Swagger definition AppToken
 * @swagger
 * definitions:
 *  AppToken:
 *   type: object
 *   properties:
 *    AppToken:
 *     type: string
 *     description: Token d'application
 *     example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImVtYWlsQGV4YW1wbGUuY29tIn0.YCmf-XzyGRkHLWUeFWWllErKllhg-...'
 */

/** Swagger definition User
 * @swagger
 * definitions:
 *  User:
 *   type: object
 *   properties:
 *    firstName:
 *     type: string
 *     description: Prénom de l'utilisateur
 *     example: 'John'
 *    lastName:
 *     type: string
 *     description: Nom de l'utilisateur
 *     example: 'Doe'
 *    active:
 *     type: boolean
 *     description: Statut d'activation du compte
 *     example: true
 *    road:
 *     type: string
 *     description: Adresse de l'utilisateur
 *     example: '123 Main Street'
 *    state:
 *     type: string
 *     description: État de l'utilisateur
 *     example: 'California'
 *    country:
 *     type: string
 *     description: Pays de l'utilisateur
 *     example: 'USA'
 *    zip:
 *     type: string
 *     description: Code postal de l'utilisateur
 *     example: '12345'
 *    city:
 *     type: string
 *     description: Ville de l'utilisateur
 *     example: 'Los Angeles'
 *    securityQuestion:
 *     type: string
 *     description: Question de sécurité de l'utilisateur
 *     example: 'Quel est le nom de votre premier animal de compagnie ?'
 *    securityAnswer:
 *     type: string
 *     description: Réponse à la question de sécurité de l'utilisateur
 *     example: 'Rex'
 *    description:
 *     type: string
 *     description: Description de l'utilisateur
 *     example: 'Je suis un passionné de technologies.'
 *    email:
 *     type: string
 *     description: Adresse email de l'utilisateur
 *     example: 'john.doe@example.com'
 */

/** Swagger get /api/auth
 * @swagger
 * /api/auth:
 *  get:
 *   summary: Afficher le message par défaut
 *   tags : [Auth]
 *   description: Action qui permet d'afficher le message par défaut de l'authentification
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    500:
 *     description: Server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 */
//Par defaut (/api/auth)
routes.get("/", (req, res) => {
  res.status(200).json({ message: "My API Auth controller. Please login." });
});

/** Swagger post /api/auth/getAppToken
 * @swagger
 * /api/auth/getAppToken:
 *  post:
 *   summary: Obtenir le token d'application
 *   tags : [Auth]
 *   description: Action qui permet d'obtenir le token d'application
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AppToken'
 *    401:
 *     description: Unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    500:
 *     description: Server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 */
//Les routes accessibles par tous (mais doit avoir les accès pour créer un AppToken)
//CREATION_APPLICATION_TOKEN_PASS et CREATION_APPLICATION_TOKEN_EMAIL (voir dans le .env)
//Retourne APPLICATION_TOKEN
routes.post("/getAppToken", AuthController.getAppToken);

/** Swagger delete /api/auth/resetAll
 * @swagger
 * /api/auth/resetAll:
 *  delete:
 *   summary: Réinitialiser tous les utilisateurs
 *   tags : [Auth]
 *   description: Action qui permet de réinitialiser tous les utilisateurs
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    401:
 *     description: Unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    500:
 *     description: Server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 */
//Les routes accessibles par tous (mais doit avoir l'APPLICATION_TOKEN)
routes.delete("/resetAll", AuthController.resetAll);

/** Swagger post /api/auth/register
 * @swagger
 * /api/auth/register:
 *  post:
 *   summary: Inscription d'un nouvel utilisateur
 *   tags : [Auth]
 *   description: Action qui permet à un nouvel utilisateur de s'inscrire
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    201:
 *     description: Created
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    400:
 *     description: Invalid input
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    401:
 *     description: Unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    409:
 *     description: Conflict
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    500:
 *     description: Server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 */
routes.post(
  "/register",
  authMiddleware.verifyTokenAdmin,
  AuthController.register
);

/** Swagger post /api/auth/login
 * @swagger
 * /api/auth/login:
 *  post:
 *   summary: Connexion d'un utilisateur existant
 *   tags : [Auth]
 *   description: Action qui permet à un utilisateur existant de se connecter
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       properties:
 *        email:
 *         type: string
 *         description: Adresse email de l'utilisateur
 *         example: 'john.doe@example.com'
 *        pass:
 *         type: string
 *         description: Mot de passe de l'utilisateur
 *         example: 'password123'
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/User'
 *    400:
 *     description: Invalid credentials
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    401:
 *     description: Unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 *    500:
 *     description: Server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/AuthDefault'
 */
routes.post("/login", AuthController.login);

module.exports = routes;