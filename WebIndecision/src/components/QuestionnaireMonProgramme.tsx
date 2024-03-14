import './QuestionnaireMonProgramme.css';
import { useNavigate } from 'react-router-dom';

const QuestionnaireMonProgramme = () => {
  const navigate = useNavigate();

  const handleGoToQuestionnaireMoyenpourReussir = () => {
    navigate('/QuestionnaireMoyenPourReussir');
  };
    const handleGoToQuestionnaireMonChoix = () => {
      navigate('/QuestionnaireMonChoix');
  };

    return (
      <div className="questionnaire-page">
        <h1>Mon programme d'études est-il un choix significatif pour moi?</h1>
        
        <div className="objectifs-rencontre">
          <h2>Objectifs de la rencontre :</h2>
          <ul>
            <p>Faire le point sur ma situation personnelle depuis le début de mes études collégiales.</p>
            <p>Identifier les facteurs pouvant mener à l'indécision vocationnelle par rapport à mon choix de programme.</p>
            <p>Avoir des pistes pour diminuer l'inconfort, l'incertitude et apporter des changements.</p>
          </ul>
        </div>
        
        <div className="section-facteurs">
          <h3>Voici les facteurs qui causent l'indécision vocationnelle :</h3>
        </div>
        <div className="questionnaire-programme-container"></div>
        <section className="titre-facteur">
          <h2>Cégep (T)</h2>
        </section>
          <h2>Transition secondaire-collégial</h2>
          <p>Il y a de nombreuses différences entre le secondaire et le collégial.</p>
          <ul>
            <p>-Comment est-ce que je vis ces changements?</p>
            <p>-Est-ce que je vis également des changements dans ma vie personnelle et sociale?</p>
          </ul>
          <div className="reponse-container">
          <textarea />
        </div>
        
        <button onClick={handleGoToQuestionnaireMonChoix} className="next-button">
        Retour au Questionnaire mon choix
      </button>
        <button onClick={handleGoToQuestionnaireMoyenpourReussir} className="next-button">
        Aller à Questionnaire moyen pour reussir
      </button>
      </div>
    );
  };
  
  export default QuestionnaireMonProgramme;