//Utils : Utilitaires pour l'authentification
//
//Auteur Alain Dubé
//(c)2022 École Du Web
//
//Utilitaires
//  generateTokenForUser
//

var jwt = require("jsonwebtoken");

const JWT_SIGN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const JWT_REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
const ACCESS_TOKEN_SECRET_EXPIRE = process.env.ACCESS_TOKEN_EXPIRE;
module.exports = {
  generateAccessToken: function (numero) {
    return jwt.sign({ numero: numero }, JWT_SIGN_SECRET, {
      expiresIn: ACCESS_TOKEN_SECRET_EXPIRE,   //Idéalement 90 minutes si le Refresh token est utilisé et fonctionnel
    });
  },
  generateRefreshToken: function (numero) {
    return jwt.sign({ numero: numero }, JWT_REFRESH_SECRET, {
      expiresIn: "7d",
    });
  },
  generateAppToken: function (user) {
    return jwt.sign(user, JWT_SIGN_SECRET, {}); //Never expire
  },
  verifyToken: function (token) {
    return jwt.verify(token, JWT_SIGN_SECRET);
  },
  verifyRefreshToken: function (token) {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  },
  verifyApplicationToken: function (appKey) {
    //Check si la demande à la bonne appKey
    try {
      const decoded = this.verifyToken(appKey);
      //Verification si le contenu est OK
      if (decoded.uname != process.env.CREATION_APPLICATION_TOKEN_NUMERO)
        return false;
    } catch (err) {
      return false;
    }
    return true;
  },
};