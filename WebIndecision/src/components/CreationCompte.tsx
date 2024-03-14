import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreationCompte = () => {
  const navigate = useNavigate();

  const [numero, setNumero] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleCreateAccount = () => {
    navigate('/connexion');
  };

  return (
    <div className="form-container">
      <h2>Créer un Compte</h2>
      <form onSubmit={handleCreateAccount} className="login-form" >
        <div className="form-field">
      <label htmlFor="numero">Numéro:</label>
          <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
          </div>
        <br />
        <div className="form-field">
          <label htmlFor="password">Mot de Passe:</label>
          <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} />
          </div>
        <br />
        <div className="form-field">
        <label htmlFor="text">Nom:</label>          
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
          </div>
        <br />
        <div className="form-field">
        <label htmlFor="text">Prenom:</label> 
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
          </div>
        <br />
        <button type="button" onClick={handleCreateAccount}>Créer le compte</button>
      </form>
    </div>
  );
};

export default CreationCompte;
