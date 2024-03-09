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

  if (isLoggedIn) {
    return null;
  }

  return (
    <div>
      <h2>Page de Connexion</h2>
      <form>
        <label>
          Numéro:
          <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>
        <br />
        <label>
          Mot de Passe:
          <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Se Connecter
        </button>
      </form>
    </div>
  );
};

export default Connexion;
