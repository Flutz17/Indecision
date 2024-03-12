import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Connexion = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [numero, setNumero] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {

    setLoggedIn(true);
    navigate('/QuestionnaireMonChoix');
  };
  const handleCreation = () => {

    setLoggedIn(true);
    navigate('/CreationCompte');
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="form-container">
      <h2>Page de Connexion</h2>
      <form className="login-form">
        <div className="form-field">
          <label htmlFor="numero">Numéro:</label>
          <input type="text" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="password">Mot de Passe:</label>
          <input type="password" id="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>Se Connecter</button>
        <button type="button" onClick={handleCreation}>Créer un compte</button>
      </form>
    </div>
  );
};

export default Connexion;
