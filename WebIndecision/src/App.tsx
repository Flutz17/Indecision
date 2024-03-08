import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Connexion from './components/Connexion';
import QuestionnaireMonChoix from './components/QuestionnaireMonChoix';
import './App.css';
import CegepLogo from './photo/CegepLogo.png';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <header className="app-header">
            <img src={CegepLogo} alt="CÉGEP RIVIÈRE-DU-LOUP" className="logo"/>
            <li>
              <Link to="/connexion">Connexion</Link>
            </li>
            </header>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/QuestionnaireMonChoix" element={<QuestionnaireMonChoix />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
