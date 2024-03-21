import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Connexion from './components/Connexion';
import QuestionnaireMonChoix from './components/QuestionnaireMonChoix';
import QuestionnaireMonProgramme from './components/QuestionnaireMonProgramme';
import QuestionnaireMoyenPourReussir from './components/QuestionnaireMoyenPourReussir';
import CreationCompte from './components/CreationCompte';
import Compilation from './components/Compilation';
import CegepLogo from './photo/CegepLogo.png';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="header">
        <div className="logo-container">
          <img src={CegepLogo} alt="CÉGEP RIVIÈRE-DU-LOUP" className="logo" />
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
          </div>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
