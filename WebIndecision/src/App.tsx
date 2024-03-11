import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Connexion from './components/Connexion';
import QuestionnaireMonChoix from './components/QuestionnaireMonChoix';
import CreationCompte from './components/CreationCompte';
import CegepLogo from './photo/CegepLogo.png';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="header">
        <img src={CegepLogo} alt="CÉGEP RIVIÈRE-DU-LOUP" className="logo" />
        <Link to="/connexion" className="connexion-link">Connexion</Link>
      </div>
      <div className="container">
        <Routes>
          <div className="page-container">
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/QuestionnaireMonChoix" element={<QuestionnaireMonChoix />} />
            <Route path="/CreationCompte" element={<CreationCompte />} />
          </div>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
