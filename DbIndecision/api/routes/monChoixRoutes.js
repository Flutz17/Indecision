const jwt = require("jsonwebtoken");
const routes = require("express").Router();

const authMiddleware = require("../middleware/auth");

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connecté sur le controleur questionnaire_monChoix!' });
});

const monChoixController = require('../controllers/monChoixController');

routes.post('/add',authMiddleware.verifyTokenUser, monChoixController.add);

routes.delete('/clearAll',authMiddleware.verifyTokenUser, monChoixController.clearAll);

routes.get('/getAll',authMiddleware.verifyTokenUser, monChoixController.getAll);

routes.get('/get/:id', authMiddleware.verifyTokenUser, monChoixController.get);

routes.delete('/delete/:id',authMiddleware.verifyTokenUser, monChoixController.delete);

module.exports = routes;