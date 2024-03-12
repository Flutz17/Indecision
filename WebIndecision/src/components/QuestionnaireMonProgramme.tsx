import './QuestionnaireMonProgramme.css';
const QuestionnaireMonProgramme = () => {
    return (
      <div className="questionnaire-page">
        <h1>Mon programme d'études est-il un choix significatif pour moi?</h1>
        
        <div className="objectifs-rencontre">
          <h2>Objectifs de la rencontre :</h2>
          <ul>
            <li>Faire le point sur ma situation personnelle depuis le début de mes études collégiales.</li>
            <li>Identifier les facteurs pouvant mener à l'indécision vocationnelle par rapport à mon choix de programme.</li>
            <li>Avoir des pistes pour diminuer l'inconfort, l'incertitude et apporter des changements.</li>
          </ul>
        </div>
        
        <div className="section-facteurs">
          <h3>Voici les facteurs qui causent l'indécision vocationnelle :</h3>
        </div>
      </div>
    );
  };
  
  export default QuestionnaireMonProgramme;