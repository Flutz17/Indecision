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
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          {/* Liste actions */}
          <ul>
            <input type="checkbox" id="ag1" name="actions" />
            <label htmlFor="ag1">Établir mes priorités: étude, travail, loisir;</label>
            <br></br>
            <input type="checkbox" id="ag2" name="actions" />
            <label htmlFor="ag2">Diminuer le temps consacré à un travail rémunéré;</label>
            <br></br>
            <input type="checkbox" id="ag3" name="actions" />
            <label htmlFor="ag3">Me faire un horaire précis d'étude et le respecter;</label>
            <br></br>
            <input type="checkbox" id="ag4" name="actions" />
            <label htmlFor="ag4">Utiliser des outils de planification: agenda, grille horaire, tableau de session, etc.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          {/* Liste ressources  */}
          <ul>
            <input type="checkbox" id="rg1" name="actions" />
            <label htmlFor="rg1">Consulter le document 'La gestion du temps' disponible au service de consultation (B-157);</label>
            <br></br>
            <input type="checkbox" id="rg2" name="actions" />
            <label htmlFor="rg2">Consulter le livre 'Oubliez la gestion du temps, gérez vos priorités' de François Lavallée disponible à la bibliothèque : <a href="https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=126285">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=126285</a></label>
            <br></br>
            <input type="checkbox" id="rg3" name="actions" />
            <label htmlFor="rg3">Consulter le livre 'Petit guide de survie des étudiants' de Marie Lambert-Chan disponible à la bibliothèque : <a href= "https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=58311">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=58311</a></label>
            <br></br>
            <input type="checkbox" id="rg4" name="actions" />
            <label htmlFor="rg4">Demander à mon API de consulter le guide 'La concentration et la gestion du temps';</label>
            <br></br>
            <input type="checkbox" id="rg5" name="actions" />
            <label htmlFor="rg5">Consulter le document 'La concentration et la gestion du temps' disponible sur le site du Centre d'aide aux étudiants de l'Université Laval, dans les références : <a href="https://www.aide.ulaval.ca/apprentissage-et-reussite/textes-et-outils/strategies-d-apprentissage/la-gestion-du-temps/">https://www.aide.ulaval.ca/apprentissage-et-reussite/textes-et-outils/strategies-d-apprentissage/la-gestion-du-temps/</a></label>
        </ul>
        </div>
      </div>
    </div>
    
    <div className="facteur-container">
      <h2>Facteur M - Organisation et méthode de travail: être méthodique et structuré dans ce que j'entreprends.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          {/* Liste actions */}
          <ul>
            <input type="checkbox" id="am1" name="actions" />
            <label htmlFor="am1">M'organiser un lieu propice à l'étude à la maison;</label>
            <br></br>
            <input type="checkbox" id="am2" name="actions" />
            <label htmlFor="am2">Préparer mes cartables et mes cahiers de note pour chaque cours et les garder en ordre;</label>
            <br></br>
            <input type="checkbox" id="am3" name="actions" />
            <label htmlFor="am3">Réviser et compléter mes notes de cours après chaque cours ou à chaque semaine;</label>
            <br></br>
            <input type="checkbox" id="am4" name="actions" />
            <label htmlFor="am4">Varier mes tâches d'études(lecture, recherche, rédaction, travail d'équipe, etc);</label>
            <br></br>
            <input type="checkbox" id="am5" name="actions" />
            <label htmlFor="am5">Enclencher rapidement ma préparation aux examens et répartir la matière en blocs d'étude;</label>
            <br></br>
            <input type="checkbox" id="am6" name="actions" />
            <label htmlFor="am6">Commencer tôt la réalisation de travaux: me faire un échéancier par étapes.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          {/* Liste ressources  */}
          <ul>
            <input type="checkbox" id="rm1" name="actions" />
            <label htmlFor="rm1">Consulter le livre 'Décrocher son diplóme (et l'emploi de ses rêves!): comment maîtriser les compétences essentielles menant au succès à l'école, au travail et dans la vie' disponible à la bibliothèque : <a href="https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=126958">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=126958</a></label>
            <br></br>
            <input type="checkbox" id="rm2" name="actions" />
            <label htmlFor="rm2">Consulter le livre 'La méthode infaillible pour réussir vos études' disponible à la bibliothèque : <a href= "https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=114790">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=114790</a></label>
            <br></br>
            <input type="checkbox" id="rm3" name="actions" />
            <label htmlFor="rm3">Consulter le livre 'l'essentiel pour reussir ses études' disponible à la bibliothèque : <a href ="https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=127017">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=127017</a></label>
            <br></br>
            <input type="checkbox" id="rm4" name="actions" />
            <label htmlFor="rm4">Consulter le livre 'La prise de notes efficace pour étudiants : Des notes inteligentes et opérationnelles !' disponible à la bibliothèque : <a href= "https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=154249">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=154249</a></label>
            <br></br>
            <input type="checkbox" id="rm5" name="actions" />
            <label htmlFor="rm5">Demander à son API de consulter le guide : <br></br>-'L'écoute en classe et la prise de notes'; <br></br>-'La lecture active et la mémorisation'; <br></br>-'La préparation aux examens et les examens'; <br></br>- 'Les travaux long'.</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur S - Stress/anxiété: maximiser mon bien-être en diminuant la pression!</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          {/* Liste actions */}
          <ul>
            <input type="checkbox" id="as1" name="actions" />
            <label htmlFor="as1">Identifier les événements, reliés aux études ou à ma vie personnelle, qui sont une source de stress et de tension pour moi;</label>
            <br></br>
            <input type="checkbox" id="as2" name="actions" />
            <label htmlFor="as2">Identifier des moyens simples et concrets que je pourrais ajouter à mes habitudes de vie; sommeil, loisir, repos, échanges avec des amis, etc.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          {/* Liste ressources  */}
          <ul>
            <input type="checkbox" id="rs1" name="actions" />
            <label htmlFor="rm1">Consulter le livre :'Mindfulness : apprivoiser le stress par la pleine conscience : une introduction aux approches basées sur la pleine conscience' disponible à la bibliothèque : <a href= "https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=54311"> https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=54311</a></label>
            <br></br>
            <input type="checkbox" id="rs2" name="actions" />
            <label htmlFor="rm2">Consulter le livre :'Pourquoi je stresse : les 6 couleurs de mon stress.' disponible à la bibliothèque : <a href= "https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=62531">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=62531</a></label>
            <br></br>
            <input type="checkbox" id="rs3" name="actions" />
            <label htmlFor="rm3">Consulter le livre :'Communiquer en public sans anxiété' disponible à la bibliothèque : <a href= "https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=151749">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=151749</a></label>
            <br></br>
            <input type="checkbox" id="rs4" name="actions" />
            <label htmlFor="rm4">Consulter le livre :'Les 5 clés pour se libérer du stress.' disponible à la bibliothèque : <a href= "https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=154869">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=154869</a></label>
            <br></br>
            <input type="checkbox" id="rs5" name="actions" />
            <label htmlFor="rm5">Consulter Marie-Josée Henry ou Suzanne Marquis au Centre de santé G-206;</label>
            <br></br>
            <input type="checkbox" id="rs6" name="actions" />
            <label htmlFor="rm6">Demander à mon API de consulter le guide 'Les exposés oraux'</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur I - Affirmation de soi/identité: me connaître, me faire confiance et prendre ma place</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          {/* Liste actions */}
          <ul>
            <input type="checkbox" id="ai1" name="actions" />
            <label htmlFor="ai1">Préciser mes difficultés à m'affirmer. (ex. dans quel contexte, avec quel type de personnes,...);</label>
            <br></br>
            <input type="checkbox" id="ai2" name="actions" />
            <label htmlFor="ai2">Observer mes comportements et mes réactions dans mes relations interpersonnelles;</label>
            <br></br>
            <input type="checkbox" id="ai3" name="actions" />
            <label htmlFor="ai3">Clarifier mon identité avec l'aide de rencontres individuelles avec une conseillière d'orientation;</label>
            <br></br>
            <input type="checkbox" id="ai4" name="actions" />
            <label htmlFor="ai4">Discuter avec mes professeurs afin de recevoir des feedbacks de la perception qu'ils ont de moi.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          {/* Liste ressources  */}
          <ul>
            <input type="checkbox" id="ri1" name="actions" />
            <label htmlFor="ri1">Consulter le livre :'Savoir s'affirmer en toutes circonstances.' disponible à la bibliothèque : <a href="https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=54511">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=54511</a></label>
            <br></br>
            <input type="checkbox" id="ri2" name="actions" />
            <label htmlFor="ri2">Consulter le livre :'Affirmez-vous : pour mieux vivre avec les autres' disponible à la bibliothèque : <a href="https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=24921">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=24921</a></label>
            <br></br>
            <input type="checkbox" id="ri3" name="actions" />
            <label htmlFor="ri3">Consulter le livre :'S'affirmer pour changer : cheminer vers l'assertivité et l'affirmation de soi.' disponible à la bibliothèque : <a href="https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=163022">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=163022</a></label>
            <br></br>
            <input type="checkbox" id="ri4" name="actions" />
            <label htmlFor="ri4">Consulter Marie-Josée Henry ou Suzanne Marquis au Centre de santé G-206</label>
            <br></br>
            <input type="checkbox" id="ri5" name="actions" />
            <label htmlFor="ri5">Consulter un conseiller au service de consultation (B-157)</label>
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
