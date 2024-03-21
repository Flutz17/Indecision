import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TuVaReussir from '../photo/TuVaReussir.png';
import './Compilation.css';

interface LocationState {
  I?: number;
  S?: number;
  M?: number;
  O?: number;
  C?: number;
  T?: number;
  A?: number;
  E?: number;
  X?: number;
}
type LocationStateKey = keyof LocationState;

const facteurs = [
  { key: "I", titre: "I", description: "Identité professionnelle : Concordance des facteurs personnels avec le choix de carrière" },
  { key: "S", titre: "S", description: "Soutien : Des amis, des proches et des professeurs" },
  { key: "M", titre: "M", description: "Métier : Connaissance de la profession et du marché du travail" },
  { key: "O", titre: "O", description: "Cours/cheminement : Efficacité personnelle dans le métier d'étudiant" },
  { key: "C", titre: "C", description: "Choix de carrière : Clarté et maintien du choix de carrière" },
  { key: "T", titre: "T", description: "Cégèp : Transition secondaire-collégial" },
  { key: "A", titre: "A", description: "Moi : Perception de soi et des attitudes" },
  { key: "E", titre: "E", description: "Engagement et projets de vie : Degré d'engagement dans les études et autres projets de vie" },
  { key: "X", titre: "X", description: "Vie personnelle : État de ma situation personnelle" },
];

const Compilation = () => {
  const location = useLocation();
  const results = location.state as LocationState || {};

  const navigate = useNavigate();

  const handleGoToQuestionnaireMonProgramme = () => {
    navigate('/QuestionnaireMonProgramme');
  };
    const handleGoToQuestionnaireMonChoix = () => {
      navigate('/QuestionnaireMonChoix');
  };

  return (
    <div className="compilation">
    <div className="compilation-titre">
      <h2>Fiche de compilation des résultats</h2>
      <h2>Mon programme d'études est-il un choix significatif pour moi?</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Facteur</th>
            <th>Résultat<br></br>(Nombre de vrai)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {facteurs.map(({ key, titre, description }) => (
            <tr key={key}>
              <td>{titre}</td>
              <td>{results[key as LocationStateKey] !== undefined ? results[key as LocationStateKey] : '0'}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>1. Pour les six facteurs (I, S, M, O, C, T), identifiez le ou les facteurs pour lesquels vous avez obtenu un résultat de 2 ou plus en noircissant la ou les cases appropriées (à la gauche des facteurs).</p>
      <p>2. Pour les facteurs (A, E, X), identifiez, s'il y a lieu, le ou les facteurs pour lesquels vous avez obtenu un résultat de 1 ou plus en noircissant la ou les cases appropriées (à la gauche des facteurs).</p>
      <h2>J'accepte qu'une copie de la fiche de compilation soit incluse à mon dossier afin de recevoir l'aide appropriée.</h2>
      <div className="imageTuVaReussir">
          <img src={TuVaReussir} alt="TuVaReussir" className="TuVaReussir" />
        </div>
        <button onClick={handleGoToQuestionnaireMonProgramme} className="next-button">
        Aller à Questionnaire mon Programme
      </button>
      <button onClick={handleGoToQuestionnaireMonChoix} className="next-button">
        Retour au Questionnaire mon choix
      </button>
    </div>
  );
};

export default Compilation;
