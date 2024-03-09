import React from 'react';
import './QuestionnaireMonChoix.css'; // Assurez-vous que le chemin est correct

const QuestionnaireMonChoix = () => {
  // Ajoutez ici toute logique supplémentaire nécessaire pour votre composant

  return (
    <div className="questionnaire-container">
      <header className="questionnaire-header">
        {/* Si vous avez le logo, décommentez et ajoutez le chemin d'accès correct */}
        {/* <img src={pathToYourLogo} alt="Logo" /> */}
        <h1>QUESTIONNAIRE</h1>
      </header>
      <main className="questionnaire-main">
        <div className="questionnaire-title">
          <h3>Mon choix de programme est-il un choix significatif pour moi?</h3>
        </div>
        <section className="questionnaire-directives">
          <h4>DIRECTIVES</h4>
          <p>Ce questionnaire a pour objectif de prendre le temps de t'arrêter et de réfléchir sur le choix de programme que tu as fait. Il va t'aider à confirmer que ton choix est un bon choix pour toi, ou à l'inverse, il va t'aider à identifier l'indécision que tu peux ressentir face à celui-ci.</p>
          <p>Les énoncés de ce questionnaire référent à tes perceptions, à tes réflexions, à tes attitudes ou à tes réactions émotives en relation avec ton choix de programme et tes activités sociales.</p>
          <p>Il n'y a pas de bonnes ou de mauvaises réponses.</p>
          <p>Une réponse est vraie si elle correspond exactement à ton vécu.</p>
        </section>
        <footer>
          <p>Ce questionnaire a été réalisé par le Service de consultation du Cégep de Rivière-du-Loup afin de dépister les élèves au choix de carrière indécis et de les supporter dans leur parcours au collégial.</p>
        </footer>
        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur I</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">1. J'ai des aptitudes variées qui me font encore hésiter dans le choix de mon programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" />
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" />
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">2. Depuis que j'ai commencé mon programme d'études, mes intérêts à la carrière ont changé.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" />
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" />
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">3. Mon choix de programme ne repose pas sur des expériences de travail ou des expériences personnelles que j'ai vécues.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" />
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" />
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">4. Je ne me connais pas suffisamment pour être certain que j'ai fait le bon choix de programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" />
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" />
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">5. Le programme que j'ai choisi ne correspond pas à mes principales exigences face à un emploi.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" />
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" />
            </label>
          </div>
        </div>
          {/* Répétez ce bloc pour les autres questions, en changeant les 'id' et 'name' appropriés */}
        </form>
      </main>
    </div>
  );
};

export default QuestionnaireMonChoix;
