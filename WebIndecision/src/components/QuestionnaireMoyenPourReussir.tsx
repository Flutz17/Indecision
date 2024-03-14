import './QuestionnaireMoyenPourReussir.css';
import { useNavigate } from 'react-router-dom';

const QuestionnaireMoyenPourReussir = () => {
  const navigate = useNavigate();

  const handleGoToQuestionnaireMonProgramme = () => {
    navigate('/QuestionnaireMonProgramme');
  };

  return (
    <div className="questionnaire-container">
      <h1>Des moyens concrets pour mieux réussir</h1>
      
      <p>Pour chaque facteur qui explique votre situation actuelle, surlignez:</p>
      <div className="ennoce-container">
        <p>les actions personnelles que vous pourriez adopter cette session;</p>
        <p>les ressources du collège qui pourraient soutenir votre démarche vers la réussite.</p>
        </div>
      <div className="facteur-container">
      <h2>Facteur G - Gestion du temps: savoir organiser mon temps de manière efficace.</h2>
      <div className="facteur-section">
        <div className="actions-personnelles">
          <h3>Actions Personnelles</h3>
          {/* Liste actions */}
          <ul>
            <input type="checkbox" id="a1" name="actions" />
            <label htmlFor="a1">Établir mes priorités: étude, travail, loisir;</label>
            <br></br>
            <input type="checkbox" id="a2" name="actions" />
            <label htmlFor="a2">Diminuer le temps consacré à un travail rémunéré;</label>
            <br></br>
            <input type="checkbox" id="a3" name="actions" />
            <label htmlFor="a3">Me faire un horaire précis d'étude et le respecter;</label>
            <br></br>
            <input type="checkbox" id="a4" name="actions" />
            <label htmlFor="a4">Utiliser des outils de planification: agenda, grille horaire, tableau de session, etc.</label>
        </ul>
        </div>
        <div className="ressources-college">
          <h3>Ressources du Collège</h3>
          {/* Liste ressources  */}
          <ul>
            <input type="checkbox" id="a1" name="actions" />
            <label htmlFor="a1">Établir mes priorités: étude, travail, loisir;</label>
            <br></br>
            <input type="checkbox" id="a2" name="actions" />
            <label htmlFor="a2">Diminuer le temps consacré à un travail rémunéré;</label>
            <br></br>
            <input type="checkbox" id="a3" name="actions" />
            <label htmlFor="a3">Me faire un horaire précis d'étude et le respecter;</label>
            <br></br>
            <input type="checkbox" id="a4" name="actions" />
            <label htmlFor="a4">Utiliser des outils de planification: agenda, grille horaire, tableau de session, etc.</label>
        </ul>
        </div>
      </div>
    </div>
    
    <button onClick={handleGoToQuestionnaireMonProgramme} className="next-button">
        Retour au Questionnaire Mon Programme
      </button>
  </div>
  );
};


export default QuestionnaireMoyenPourReussir;
