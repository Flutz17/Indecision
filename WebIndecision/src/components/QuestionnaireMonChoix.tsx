import './QuestionnaireMonChoix.css'; // Importez votre feuille de style

const QuestionnaireMonChoix = () => {
  return (
    <div className="questionnaire-container">
      <header className="questionnaire-header">
        {/* Vous pouvez ajouter une balise img pour le logo si vous l'avez */}
        <h1>CÉGEP RIVIÈRE-DU-LOUP</h1>
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
        {/* Ajoutez d'autres sections au besoin */}
      </main>
    </div>
  );
};

export default QuestionnaireMonChoix;
