const jwt = require("jsonwebtoken");
const routes = require("express").Router();

const authMiddleware = require("../middleware/auth");

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connecté sur le controleur ressources!' });
});

const ressourcesController = require('../controllers/ressourcesController');

routes.post('/add',authMiddleware.verifyTokenUser, ressourcesController.add);

routes.delete('/clearAll',authMiddleware.verifyTokenUser, ressourcesController.clearAll);

routes.get('/getAll',authMiddleware.verifyTokenUser, ressourcesController.getAll);

routes.get('/get/:id', authMiddleware.verifyTokenUser, ressourcesController.get);

routes.delete('/delete/:id',authMiddleware.verifyTokenUser, ressourcesController.delete);

module.exports = routes;