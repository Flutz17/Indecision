import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Connexion from './components/Connexion';
import QuestionnaireMonChoix from './components/QuestionnaireMonChoix';
import QuestionnaireMonProgramme from './components/QuestionnaireMonProgramme';
import QuestionnaireMoyenPourReussir from './components/QuestionnaireMoyenPourReussir';
import CreationCompte from './components/CreationCompte';
import Compilation from './components/Compilation';
import FinFormulaire from './components/FinFormulaire';
import CegepLogo from './photo/CegepLogo.png';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="header">
        <div className="logo-container">
          <img src={CegepLogo} alt="CÉGEP RIVIÈRE-DU-LOUP" className="logo" />
        </div>
        <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/QuestionnaireMonChoix" className="menu-item">Questionnaire Mon Choix</Link>
          <br></br>
          <Link to="/Compilation" className="menu-item">Resultat du Questionnaire Mon Choix</Link>
          <br></br>
          <Link to="/QuestionnaireMonProgramme" className="menu-item">Questionnaire Mon Programme</Link>
          <br></br>
          <Link to="/QuestionnaireMoyenPourReussir" className="menu-item">Questionnaire Moyen Pour Reussir</Link>
        </div>
        <Link to="/connexion" className="connexion-link">Connexion</Link>
      </div>
      <div className="container">
        <Routes>
          <div className="page-container">
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/QuestionnaireMonChoix" element={<QuestionnaireMonChoix />} />
            <Route path="/QuestionnaireMonProgramme" element={<QuestionnaireMonProgramme />} />
            <Route path="/QuestionnaireMoyenPourReussir" element={<QuestionnaireMoyenPourReussir />} />
            <Route path="/CreationCompte" element={<CreationCompte />} />
            <Route path="/Compilation" element={<Compilation />} />
            <Route path="/FinFormulaire" element={<FinFormulaire />} />
          </div>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
