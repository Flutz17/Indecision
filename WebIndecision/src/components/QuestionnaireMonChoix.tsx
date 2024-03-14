import './QuestionnaireMonChoix.css';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import TuVaReussir from '../photo/TuVaReussir.png';
const QuestionnaireMonChoix = () => {
  const navigate = useNavigate();

  const handleGoToQuestionnaireMonProgramme = () => {
    navigate('/QuestionnaireMonProgramme');
  };
  const [countTrueI, setCountTrueI] = useState(0);
  const [countTrueS, setCountTrueS] = useState(0);
  const [countTrueM, setCountTrueM] = useState(0);
  const [countTrueO, setCountTrueO] = useState(0);
  const [countTrueC, setCountTrueC] = useState(0);
  const [countTrueT, setCountTrueT] = useState(0);
  const [countTrueA, setCountTrueA] = useState(0);
  const [countTrueE, setCountTrueE] = useState(0);
  const [countTrueX, setCountTrueX] = useState(0);


  const trueI = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueI((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };

  const trueS = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueS((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };

  const trueM = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueM((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };

  const trueO = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueO((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };

  const trueC = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueC((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };

  const trueT = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueT((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };

  const trueA = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueA((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };

  const trueE = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueE((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };
  const trueX = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCountTrueX((prevCount) =>
      value === 'true' && checked
        ? prevCount + 1
        : prevCount - 1
    );
  };
  return (
    <div className="questionnaire-container">
      <header className="questionnaire-header">
        <h1>QUESTIONNAIRE</h1>
      </header>
      <main className="questionnaire-main">
        <div className="questionnaire-page">
          <h1>Mon choix de programme est-il un choix significatif pour moi?</h1>
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
              <input type="radio" name="q1" value="true" onChange={trueI}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueI}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">2. Depuis que j'ai commencé mon programme d'études, mes intérêts à la carrière ont changé.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueI}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueI}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">3. Mon choix de programme ne repose pas sur des expériences de travail ou des expériences personnelles que j'ai vécues.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueI}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueI}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">4. Je ne me connais pas suffisamment pour être certain que j'ai fait le bon choix de programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueI}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueI}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">5. Le programme que j'ai choisi ne correspond pas à mes principales exigences face à un emploi.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueI}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueI}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueI}</p>
        </div>


        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur S</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">6. Certaines personnes qui me sont chères sont d'avis que le choix de programme que j'ai fait ne me convient pas.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" onChange={trueS}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueS}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">7. Je me sens mal à l'aise de rencontrer mes professeurs afin de leur parler de mon questionnement par rapport à mon choix de carrière.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueS}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueS}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">8. Je ne peux pas compter sur le soutien de mes proches pour m'encourager à réussir mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueS}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueS}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">9. Les personnes qui me sont importantes ne portent pas intérêt à ce que je fais dans mes cours.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueS}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueS}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">10. Je ne sens pas que mes amis m'encouragent à réussir mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueS}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueS}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueS}</p>
        </div>


        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur M</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">11. Je suis inquiète de ne pas me trouver de l'emploi dans la carrière que j'ai choisie.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" onChange={trueM}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueM}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">12. J'aimerais me spécialiser après l'obtention de mon diplôme (DEC), mais je manque d'information concernant les différentes spécialités du niveau collégial ou les orientations universitaires.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueM}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueM}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">13. Depuis le début de la session, je n'ai pas eu suffisamment d'informations sur ce que font les travailleurs dans mon programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueM}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueM}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">14. Je pense qu'il est irréaliste pour moi de développer les attitudes exigées par la profession, d'ici la fin de mon programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueM}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueM}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">15. Les conférences, les visites, les stages d'observations et/ou la rencontre avec les travailleurs de mon domaine m'ont amené à remettre en question mon choix de programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueM}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueM}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueM}</p>
        </div>


        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur O</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">16. Je ne pense pas être en mesure de répondre aux exigences des travaux que mon programme demande.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" onChange={trueO}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueO}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">17. Depuis que j'ai commencé mon programme, j'ai de la difficulté à apprendre et à retenir ce qu'on m'enseigne.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueO}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueO}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">18. Je ne mets pas les efforts nécessaires dans mes études pour maintenir les résultats que je souhaite.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueO}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueO}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">19. Jusqu'à présent, je ne suis pas satisfait(e) de mes résultats.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueO}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueO}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">20. Je ne demande pas d'aide lorsque je n'arrive pas à comprendre par moi-même.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueO}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueO}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueO}</p>
        </div>


        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur C</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">21. Depuis que j'ai commencé mon programme, je ne suis plus certain(e) d'être dans le bon domaine.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" onChange={trueC}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueC}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">22. Le choix de carrière que j'ai fait ne correspond pas entièrement à mes attentes.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueC}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueC}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">23. Malgré le fait que je sois inscrit dans un programme d'études, plusieurs autres programmes m'intéressent toujours.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueC}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueC}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">24. Je ne vois pas comment le programme dans lequel je suis inscrit(e) va me préparer à la carrière que je souhaite faire.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueC}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueC}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">25. J'ai l'impression de perdre mon temps car je ne vois pas la pertinence de certains cours reliés à mon programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueC}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueC}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueC}</p>
        </div>


        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur T</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">26. J'ai de la difficulté à m'intégrer aux autres élèves du programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" onChange={trueT}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueT}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">27. La vie en appartement ou à la résidence ou à la maison familiale est désagréable pour moi.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueT}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueT}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">28. Je ne retrouve pas au Cégep des activités pour me permettre de me réaliser au niveau personnel.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueT}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueT}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">29. La transition entre le secondaire et le collégial est ardue pour moi.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueT}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueT}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">30. J'ai de la difficulté à me prendre en charge et à suivre le rythme des études collégiales.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueT}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueT}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueT}</p>
        </div>


        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur A</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">31. De façon générale dans ma vie, j'ai de la difficulté à prendre une décision.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" onChange={trueA}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueA}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">32. J'ai besoin d'être rassuré(e) par un conseiller d'orientation que mon choix de programme est le bon pour moi.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueA}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueA}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">33. En général, j'éprouve de la difficulté à savoir ce qui me convient.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueA}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueA}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">34. La plupart du temps, je garde pour moi ce que je ressens.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueA}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueA}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">35. Depuis que j'ai commencé mon programme d'études, j'ai moins confiance en moi et en mes capacités.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueA}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueA}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueA}</p>
        </div>


        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur E</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">36. Pour le moment, mon projet d'études n'est pas le principal projet que je veux réaliser.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" onChange={trueE}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueE}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">37. J'ai des responsabilités à l'extérieur du cégep qui occupent beaucoup de mon temps en plus de mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueE}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueE}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">38. T'estime que mes activités parascolaires occupent trop de temps par rapport à mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueE}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueE}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">39. J'estime que mes activités avec mon groupe d'amis occupent trop de temps par rapport à mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueE}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueE}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">40. J'ai un projet à l'extérieur du cégep qui remet en question la poursuite de mon programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueE}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueE}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueE}</p>
        </div>


        <form className="questionnaire-form">
          <br></br>
          <h3>Facteur X</h3>
          <div className="response-options">
            <label className="radio-option">
              Vrai
            </label>
            <label className="radio-option">
              Faux
            </label>
          </div>
          <div className="questionnaire-item">
          <span className="question-text">41. J'ai une difficulté personnelle qui nuit à mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q1" value="true" onChange={trueX}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q1" value="false" onChange={trueX}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">42. J'ai une difficulté financière qui m'empêche de me concentrer dans mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q2" value="true" onChange={trueX}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q2" value="false" onChange={trueX}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">43. J'ai une difficulté de relation avec les autres.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q3" value="true" onChange={trueX}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q3" value="false" onChange={trueX}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">44. Je fais une consommation abusive d'alcool ou de drogue qui nuit à mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q4" value="true" onChange={trueX}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q4" value="false" onChange={trueX}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">45. J'ai un problème de santé qui nuit à mes études.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q5" value="true" onChange={trueX}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q5" value="false" onChange={trueX}/>
            </label>
          </div>
        </div>
        <div className="questionnaire-item">
          <span className="question-text">46. Je me reconnais comme une personne qui pourrait changer de programme.</span>
          <div className="response-options">
            <label className="radio-option">
              <input type="radio" name="q6" value="true" onChange={trueX}/>
            </label>
            <label className="radio-option">
              <input type="radio" name="q6" value="false" onChange={trueX}/>
            </label>
          </div>
        </div>
        </form>
        <div className="questionnaire-footer">
          <p className="compteur-vrai">Total des réponses 'Vrai': {countTrueX}</p>
        </div>
        <p>Les énoncés sont regroupés par FACTEUR. pour chacun des facteurs, calcule le nombre de réponses "VRAI" et reporte tes résultats sur la fiche de compilation</p>
        <div className="imageTuVaReussir">
          <img src={TuVaReussir} alt="TuVaReussir" className="TuVaReussir" />
        </div>
        <button onClick={handleGoToQuestionnaireMonProgramme} className="next-button">
        Aller à Questionnaire Mon Programme
      </button>
      </main>
    </div>
  );
};

export default QuestionnaireMonChoix;
