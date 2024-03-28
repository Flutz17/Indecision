const jwt = require("jsonwebtoken");
const routes = require("express").Router();

const authMiddleware = require("../middleware/auth");

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connecté sur le controleur actions!' });
});

const actionsController = require('../controllers/actionsController');

routes.post('/add',authMiddleware.verifyTokenUser, actionsController.add);

routes.delete('/clearAll',authMiddleware.verifyTokenUser, actionsController.clearAll);

routes.get('/getAll',authMiddleware.verifyTokenUser, actionsController.getAll);

routes.get('/get/:id', authMiddleware.verifyTokenUser, actionsController.get);

routes.delete('/delete/:id',authMiddleware.verifyTokenUser, actionsController.delete);

module.exports = routes;