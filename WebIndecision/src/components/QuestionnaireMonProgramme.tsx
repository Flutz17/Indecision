import { useNavigate } from 'react-router-dom';
import './QuestionnaireMonProgramme.css';

const QuestionnaireMonProgramme = () => {
  const navigate = useNavigate();

  const handleGoToQuestionnaireMoyenpourReussir = () => {
    navigate('/QuestionnaireMoyenPourReussir');
  };
    const handleGoToCompilation = () => {
      navigate('/Compilation');
  };

    return (
      <div className="questionnaire-page">
        <h1>Mon programme d'études est-il un choix significatif pour moi?</h1>
        
        <div className="objectifs-rencontre">
          <h2>Objectifs de la rencontre :</h2>
            <p>Faire le point sur ma situation personnelle depuis le début de mes études collégiales.</p>
            <p>Identifier les facteurs pouvant mener à l'indécision vocationnelle par rapport à mon choix de programme.</p>
            <p>Avoir des pistes pour diminuer l'inconfort, l'incertitude et apporter des changements.</p>
        </div>
        
        <div className="section-facteurs">
          <p>Voici les facteurs qui causent l'indécision vocationnelle :</p>
        </div>
        <div className="questionnaire-programme-container"></div>
        <section className="titre-facteur">
          <h2>Cégep (T)</h2>
        </section>
          <h2>Transition secondaire-collégial</h2>
          <p>Il y a de nombreuses différences entre le secondaire et le collégial.</p>
          <p>-Comment est-ce que je vis ces changements?</p>
          <p>-Est-ce que je vis également des changements dans ma vie personnelle et sociale?</p>
          <div className="reponse-container">
          <textarea />
        </div>

        <br></br>
        <div className="questionnaire-programme-container"></div>
        <section className="titre-facteur">
          <h2>Soutien (S)</h2>
        </section>
        <div className="S">
  <div>
    <h2>famille, amis & enseignants</h2>
    <p>Mes amis, mes proches et mes enseignants me soutiennent-ils?</p>
    <p>Croient-ils en moi et en mon projet?</p>
    <div className="reponse-S">
      <div>
      <p>Mon réseau:</p>
        <textarea />
      </div>
      <div>
      <p>Ce qu'ils disent de mon projet:</p>
        <textarea />
      </div>
    </div>
  </div>
</div>





        <br></br>
        <div className="questionnaire-programme-container"></div>
        <section className="titre-facteur">
          <h2>Identité professionnelle (I)</h2>
        </section>
          <h2>Mon choix de programme est-il directement en lien avec mes intérêts, mes valeurs et aptitudes?</h2>
          <p>Est-ce que je ressens que mon programme fait du sens pour moi? Est-il possible pour moi d'envisager de travailler dans ce domaine et d'en retirer une satisfaction personnelle? Ai-je le profil du diplômé?</p>
          <div className="reponse-I">
          <p>J'aime:</p>
          <textarea />
          </div>
          <div className="reponse-I">
            <p>Je suis capable de:</p>
          <textarea />
        </div>
        <div className="reponse-I">
            <p>Ce qui est important pour moi, c'est:</p>
          <textarea />
        </div>
        <div className="reponse-I">
            <p>je suis motivé par:</p>
          <textarea />
        </div>

        <br></br>
        <div className="questionnaire-programme-container"></div>
        <section className="titre-facteur">
          <h2>Métier (M)</h2>
        </section>
          <h2>Connaissance de la profession et du marché du travail</h2>
          <p>Depuis le debut de la session, mes enseignants m'ont présenté le contenu des cours du programme, j'ai visité des services de garde, j'ai fait des observations au centre de la petite enfance 'Le Jardin'. De plus, j'ai entendu des témoignages (parents et enfants) et effectué des travaux pratiques dans le cours d'introduction à la profession.</p>
            <p>Ce que je pense du métier est positif ou négatif? Pourquoi?</p>
          <div className="reponse-container">
          <textarea />
        </div>

        <br></br>
        <div className="questionnaire-programme-container"></div>
        <section className="titre-facteur">
          <h2>Choix de carrière (C)
            <br></br>
          (P/R à la profession)</h2>
        </section>
          <h2>Clarté et maintien du choix de carrière</h2>
          <ul>
            <p>Suis-je en mesure de me projeter sur le marché du travail dans ce domaine? Est-ce que je vois la pertinence des cours pour mon projet de carrière? Ce qui me plaît dans cette profession :</p>
          </ul>
          <div className="reponse-container">
          <textarea />
        </div>

        <br></br>
        <div className="questionnaire-programme-container"></div>
        <section className="titre-facteur">
          <h2>Moi (A)
            <br></br>
          (P/R à la personnalité)</h2>
        </section>
          <h2>Perception de soi et des attitudes</h2>
          <ul>
            <p>Habituellement, est-ce que j'ai tendance à me faire confiance? Est-ce que j'ai de la facilité à m'affirmer? Est-ce que je me considère comme quelqu'un d'important? Le premier facteur qui influence la réussite est ma propre perception de moi-meme face à la réussite.</p>
          </ul>
          <div className="reponse-container">
          <textarea />
        </div>

          <br></br>
        <div className="questionnaire-programme-container"></div>
        <section className="titre-facteur">
          <h2>Vie personnelle (X)</h2>
        </section>
          <h2>Etat de ma situation personnelle</h2>
          <p>Est-ce que je vis présentement des événements significatifs qui peuvent affecter mon cheminement scolaire et, par le fait même, remettre en question mon choix de programme? Est-ce que je sens que je perds le contrôle dans une de mes sphères de vie?</p>
          <ul>
            <p>Commentaires personnels :</p>
          </ul>
          <div className="reponse-container">
          <textarea />
        </div>
        <h6>Aide pédagogique individuelle</h6>
        <h6>Service de consultation</h6>
        <h6>Cégep de Rivière-du-loup</h6>
        <button onClick={handleGoToQuestionnaireMoyenpourReussir} className="next-button">
        Aller à Questionnaire moyen pour reussir
      </button>
        <button onClick={handleGoToCompilation} className="next-button">
        Retour a la compilation des résultat du questionnairemon choix
      </button>
      </div>
    );
  };
  
  export default QuestionnaireMonProgramme;