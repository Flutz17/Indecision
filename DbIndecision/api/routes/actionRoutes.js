//Fichier de route pour le controleur actionController
//
//Auteur : Alain Dube
//(c)2022 Ecole Du Web
//
const jwt = require("jsonwebtoken");
const routes = require("express").Router();

const authMiddleware = require("../middleware/auth");

/** Swagger tag actions
  * @swagger
 *  tags:
 *   name: actions
 *   description: Pour la gestion des actions
 */



/** Swagger definition BadToken
 * @swagger
 * definitions:
 *  BadToken:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message de retour
 *     example: 'Mauvais token'
  */
/** Swagger definition actionDefault
 * @swagger
 * definitions:
 *  actionDefault:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: identification du actions
 *     example: 'Connecté sur le controleur actions!'
  */
/** Swagger definition actionAdded
 * @swagger
 * definitions:
 *  actionAdded:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message retourné
 *     example: '1 action inserée'
   */
/** Swagger definition actionDeleted
 * @swagger
 * definitions:
 *  actionDeleted:
 *   type: object
 *   properties:
 *    message:
 *     type: number
 *     description: Message retourné
 *     example: 'actions supprimes'
   */
/** Swagger definition actionGetNbre
 * @swagger
 * definitions:
 *  actionGetNbre:
 *   type: object
 *   properties:
 *    Nbre:
 *     type: number
 *     description: Nbre total d'éléments
 *     example: '33'
*    actions:
 *     type: number
 *     description: La action totale
 *     example: '34'
   */

/** Swagger definition actionGetAll
 * @swagger
 * definitions:
 *  actionGetAll:
 *   type: object
 *   properties:
 *    _id:
 *     type: number
 *     description: Identification
 *     example: '636c5d21aff782043bd82f64'
 *    name:
 *     type: string
 *     description: Nom de la action
 *     example: 'Tarte au pommes'
 *    description:
 *     type: string
 *     description: Information sur la action
 *     example: 'Ingrériants principaux : Pommes'
   */

/** Swagger get /api/actions/
 * @swagger
  * /api/actions/:
  *  get:
  *   summary: Action par défaut du actions
 *   tags : [actions]
  *   description: Action par défaut qui dit qu'on est bien connecté sur le copntroleur action
  *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/actionDefault'
  *    500:
  *     description: Erreur lors du traitement de la demande
  */
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connecté sur le controleur actions!' });
});

//Routes pour le controleur actionController
const actionController = require('../controllers/actionController');

/** Swagger get /api/actions/add/
 * @swagger
  * /api/actions/add/:
  *  post:
  *   summary: Ajout d'une action
  *   tags : [actions]
  *   description: Action qui permet d'ajouter une action dans la base de données
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/actionData'
  *   responses:
  *    200:
  *     description: success
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#/definitions/actionAdded'
  *    401:
  *     description: Mauvais token
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#/definitions/BadToken'
  *    403:
  *     description: Mauvaise authentification
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#/definitions/BadToken'
  *    409:
  *     description: action title already exists
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#/definitions/BadToken'
  *    500:
  *     description: Erreur lors du traitement de la demande
  */
routes.post('/add',authMiddleware.verifyTokenUser, actionController.add);

/** Swagger get /api/actions/clearAll/
 * @swagger
  * /api/actions/clearAll/:
  *  delete:
  *   summary: Effacer toutes les actions de la base de données
 *   tags : [actions]
  *   description: Action qui permet d'effacer toutes les actions de la base de données
   *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/actionDeleted'
*    401:
 *     description: Mauvais token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/BadToken'
*    403:
 *     description: Mauvaise authentification
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/BadToken'
  *    500:
  *     description: Erreur lors du traitement de la demande
  */
routes.delete('/clearAll',authMiddleware.verifyTokenUser, actionController.clearAll);

/** Swagger get /api/actions/getAll/
 * @swagger
  * /api/actions/getAll/:
  *  get:
  *   summary: Obtenir les actions de la base de données
 *   tags : [actions]
  *   description: Action qui permet d'obtenir les actions de la base de données
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/actionGetAll'
*    401:
 *     description: Mauvais token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/BadToken'
*    403:
 *     description: Mauvaise authentification
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/BadToken'
  *    500:
  *     description: Erreur lors du traitement de la demande
  */
routes.get('/getAll',authMiddleware.verifyTokenUser, actionController.getAll);

/** Swagger get /api/actions/get/:id
 * @swagger
 * /api/actions/get/{id}:
 *   get:
 *     summary: Retourne les actions selon des critères (id ou nom) passés en parametres
 *     tags: [actions]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: Identification Id ou Nom de la action
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *      200:
 *        description: success
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/definitions/actionData'
 *      401:
 *        description: Mauvais token
 *        content:
 *         application/json:
 *          schema:
 *           $ref: '#/definitions/BadToken'
 *      403:
 *        description: Mauvaise authentification
 *        content:
 *         application/json:
 *          schema:
 *           $ref: '#/definitions/BadToken'
 *      500:
 *        description: Erreur lors du traitement de la demande
 */
routes.get('/get/:id', authMiddleware.verifyTokenUser, actionController.get);

/** Swagger delete /api/actions/delete/:id
 * @swagger
 * /api/actions/delete/{id}:
 *  delete:
 *   summary: Supprimer une action existante
 *   tags : [actions]
 *   description: Action qui permet de supprimer une action existante dans la base de données
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID de la action à supprimer
 *      schema:
 *       type: string
 *      required: true
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/actionDeleted'
 *    401:
 *     description: Mauvais token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/BadToken'
 *    403:
 *     description: Mauvaise authentification
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/BadToken'
 *    410:
 *     description: The record does not exist
 *    500:
 *     description: Erreur lors du traitement de la demande
 */
routes.delete('/delete/:id',authMiddleware.verifyTokenUser, actionController.delete);

module.exports = routes;