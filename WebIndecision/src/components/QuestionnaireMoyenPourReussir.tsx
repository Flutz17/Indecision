import { useNavigate } from 'react-router-dom';
import './QuestionnaireMoyenPourReussir.css';

const QuestionnaireMoyenPourReussir = () => {
  const navigate = useNavigate();

  const handleGoToQuestionnaireMonProgramme = () => {
    navigate('/QuestionnaireMonProgramme');
  };
  const handleGoToFinFormulaire = () => {
    navigate('/FinFormulaire');
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

    <br></br>
    <h5>Des moyens concrets pour mieux reussir. À  moi d'en profiter!!!</h5>
    <br></br>

    <div className="facteur-container">
      <h2>Facteur S - Stress/anxiété: maximiser mon bien-être en diminuant la pression!</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
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

    <div className="facteur-container">
      <h2>Facteur O - Orientation: mieux définir son projet d'étude et de carrière</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ao1" name="actions" />
            <label htmlFor="ao1">Je me donne l'occasion de réfléchir à mes intérêts, mes aptitudes, mes forces, etc;</label>
            <br></br>
            <input type="checkbox" id="ao2" name="actions" />
            <label htmlFor="ao2">Je questionne mes proches (parents, amis, professeurs) pour mieux connaître les professions qui pourraient me convenir;</label>
            <br></br>
            <input type="checkbox" id="ao3" name="actions" />
            <label htmlFor="ao3">Participer à des activités locales ou régionales sur les carrières (ex.: Salon de l'emploi et de la formation, etc.).</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ro1" name="actions" />
            <label htmlFor="ro1">Entreprendre une démarche d'orientation avec une conseillère d'orientation du service de consultation</label>
            <br></br>
            <input type="checkbox" id="ro2" name="actions" />
            <label htmlFor="ro2">Consulter le centre de documentation du service de consultation au B-157</label>
            <br></br>
            <input type="checkbox" id="ro3" name="actions" />
            <label htmlFor="ro3">Consulter le site Internet du Collège (<a href="www.cegep-rdl.qc.ca">www.cegep-rdl.qc.ca</a>) à Carrière et emplois, ensuite des sites 'carrières'. Une panoplie d'information est à ma disposition (liens vers les sites Web des établissements d'enseignement postsecondaire et des liens vers des sites d'exploration de carrières et du marché du travail)</label>
            <br></br>
            <input type="checkbox" id="ro4" name="actions" />
            <label htmlFor="ro4">Discuter avec mes professeurs de mon orientation de carrière (débouchés du programme de formation dans lequel je me suis inscris, etc.)</label>
            <br></br>
            <input type="checkbox" id="ro5" name="actions" />
            <label htmlFor="ro5">Consulter le livre: Bien choisir sa trajectoire professionnelle. Disponible à la bibliothèque : <a href="https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=123237">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=123237</a></label>
            <br></br>
            <input type="checkbox" id="ro6" name="actions" />
            <label htmlFor="ro6">Consulter le livre: Et si je trouvais enfin ce que je veux faire de ma vie?: Mon carnet orientation & vocation. Les 20 questions à te poser pour trouver et prendre ta place professionnellement. Disponible à la bibliothèque : <a href="https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=88865322">https://rdl.koha.collecto.ca/cgi-bin/koha/opac-detail.pl?biblionumber=88865322</a></label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur T - Adaptation aux études: m'adapter au rythme du collégial et en tirer le maximum.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="at1" name="actions" />
            <label htmlFor="at1">Lire La P'tite Antenne (journal bihebdomadaire du collège: dates importantes, conférences activités offertes, ect.);</label>
            <br></br>
            <input type="checkbox" id="at2" name="actions" />
            <label htmlFor="at2">M'inscrire à une activité parascolaire pour élargir mon réseau social;</label>
            <br></br>
            <input type="checkbox" id="at3" name="actions" />
            <label htmlFor="at3">Faire connaissance avec au moins une personne dans chaque cours et noter comment les rejoindre;</label>
            <br></br>
            <input type="checkbox" id="at4" name="actions" />
            <label htmlFor="at4">Ne pas hésiter à rencontrer mes professeurs pour m'aider si je trouve le rythme des cours trop rapide et/ou les exigences difficiles à respecter.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="rt1" name="actions" />
            <label htmlFor="rt1">Consulter Marie-Josée Henry ou Suzanne Marquis au Centre de santé G-206: Si j'ai de la difficulté à briser mon isolement.</label>
            <br></br>
            <input type="checkbox" id="rt2" name="actions" />
            <label htmlFor="rt2">Consulter le Service de consultation au B-157: Si j'ai de la difficulté à m'adapter aux études collégiales.</label>
            <br></br>
            <input type="checkbox" id="rt3" name="actions" />
            <label htmlFor="rt3">Consulter le centre sportif: Information et inscription à des activités parascolaires (Stéphane Lebrun, D-019).</label>
            <br></br>
            <input type="checkbox" id="rt4" name="actions" />
            <label htmlFor="rt4">Faire appel à Francois Provost (G-004), responsable de la vie étudiante: Pour connaître les activités étudiantes régulières.</label>
            <br></br>
            <input type="checkbox" id="rt5" name="actions" />
            <label htmlFor="rt5">Consulter les renseignements utiles disponibles dans l'agenda.</label>
            <br></br>
            <input type="checkbox" id="rt6" name="actions" />
            <label htmlFor="rt6">L'AGE du collège: Divers comités et services à ta disposition.</label>
            <br></br>
            <input type="checkbox" id="rt6" name="actions" />
            <label htmlFor="rt6">Rendre visite à l'animateur de pastorale Guy Paradis (G-035).</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur P - Perception des études: l'importance des études dans ma vie?</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ap1" name="actions" />
            <label htmlFor="ap1">Faire la liste de mes priorités et observer dans quel ordre de priorité.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="rp1" name="actions" />
            <label htmlFor="rp1">Consulter le Service de consultation au B-157: personne ressources et exercices.</label>
            <br></br>
            <input type="checkbox" id="rp2" name="actions" />
            <label htmlFor="rp2">Demander à mon API de consulter le guide 'La motivation'</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur E - Effort/Persévérance: savoir mettre l'énergie nécessaire pour réussir mes études.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ae1" name="actions" />
            <label htmlFor="ae1">Où est-ce que je mets mes énergies: dans ma vie sociale, un travail rémunéré, mes études?</label>
            <br></br>
            <input type="checkbox" id="ae2" name="actions" />
            <label htmlFor="ae2">Reconnaître que rien n'arrive par 'magie', il faut y mettre du temps et de l'effort.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="re1" name="actions" />
            <label htmlFor="re1">Prendre rendez-vous avec mon API.</label>
            <br></br>
            <input type="checkbox" id="re2" name="actions" />
            <label htmlFor="re2">Demander à mon API de consulter le guide 'Surmonter la procrastination scolaire'</label>
            <br></br>
            <br></br>
            * Tendance à tout remettre à la dernière minute
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur A - Difficulté d'apprentissage: reconnaître mes limites et y faire face.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="aa1" name="actions" />
            <label htmlFor="aa1">Je travaille ma capacité de concentration;</label>
            <br></br>
            <input type="checkbox" id="aa2" name="actions" />
            <label htmlFor="aa2">Je vais chercher de l'aide au cégep;</label>
            <br></br>
            <input type="checkbox" id="aa3" name="actions" />
            <label htmlFor="aa3">Étudier avec un groupe de pairs;</label>
            <br></br>
            <input type="checkbox" id="aa4" name="actions" />
            <label htmlFor="aa4">Ne pas hésiter à poser des questions aux professeurs lors d'incompréhension;</label>
            <br></br>
            <input type="checkbox" id="aa5" name="actions" />
            <label htmlFor="aa5">Prendre rendez-vous avec mon professeur, selon ses périodes de disponibilité, lorsque je ne suis plus capable de suivre le rythme du cours, etc.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ra1" name="actions" />
            <label htmlFor="ra1">Consulter mes enseignants;</label>
            <br></br>
            <input type="checkbox" id="ra2" name="actions" />
            <label htmlFor="ra2">Consulter mon aide pédagogique.</label>
            <br></br>
            <input type="checkbox" id="ra3" name="actions" />
            <label htmlFor="ra3">Assister à des rencontres avec les centres d'aide (ex.: français,...)</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur R - Relation avec les professeurs: reconnaître que les profs sont de précieux alliés pour ma réussite.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ar1" name="actions" />
            <label htmlFor="ar1">Prendre conscience que mon professeur enseigne et que moi j'apprends: m'engager activement dans mes études;</label>
            <br></br>
            <input type="checkbox" id="ar2" name="actions" />
            <label htmlFor="ar2">Indiquer dans mon agenda les périodes de disponibilité de mes professeurs;</label>
            <br></br>
            <input type="checkbox" id="ar3" name="actions" />
            <label htmlFor="ar3">Ne pas hésiter à rencontrer mes professeurs pour recevoir des explications supplémentaires et mieux comprendre leur approche;</label>
            <br></br>
            <input type="checkbox" id="ar4" name="actions" />
            <label htmlFor="ar4">Profiter des périodes d'encadrement (activités hors cours) offertes par mes professeurs pour me préparer aux examens;</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="rr1" name="actions" />
            <label htmlFor="rr1">Rencontrer mon aide pédagogique ou un conseiller d'orientation;</label>
            <br></br>
            <input type="checkbox" id="rr2" name="actions" />
            <label htmlFor="rr2">Consulter le responsable de mon programme en cas de conflit ou de difficultés;</label>
            <br></br>
            <input type="checkbox" id="rr3" name="actions" />
            <label htmlFor="rr3">L'AGE si j'ai un conflit avec un professeur;</label>
            <br></br>
            <input type="checkbox" id="rr4" name="actions" />
            <label htmlFor="rr4">Participer à des activités extra-scolaires pour parfaire mes relations avec mes professeurs.</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur F - Réseau social et sentiment d'appartenance: m'établir un réseau stimulant et aidant.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="af1" name="actions" />
            <label htmlFor="af1">Briser l'isolement en allant vers les autres;</label>
            <br></br>
            <input type="checkbox" id="af2" name="actions" />
            <label htmlFor="af2">Consulter le journal 'La P'tite Antenne' et profiter des multiples occasions offertes pour établir de nouveaux contacts;</label>
            <br></br>
            <input type="checkbox" id="af3" name="actions" />
            <label htmlFor="af3">Savoir mettre mes limites face à des influences négatives de gens qui m'entourent (consommation, ne pas assister à des cours, etc.).</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="rf1" name="actions" />
            <label htmlFor="rf1">Participer à des activités sportives, culturelles, etc;</label>
            <br></br>
            <input type="checkbox" id="rf2" name="actions" />
            <label htmlFor="rf2">Consulter Marie-Josée Henry ou Suzanne Marquis au Centre de santé (G-206); des personnes-ressources sont là pour moi.</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur C - Evénements circonstanciels: aller chercher du support dans les moments difficiles.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ac1" name="actions" />
            <label htmlFor="ac1">Agir pour améliorer ma situation : consulter une personne spécialisée (médecin, CLSC, etc.);</label>
            <br></br>
            <input type="checkbox" id="ac2" name="actions" />
            <label htmlFor="ac2">Faire le point sur ma situation avec mon aide pédagogique;</label>
            <br></br>
            <input type="checkbox" id="ac3" name="actions" />
            <label htmlFor="ac3">Ne pas hésiter à informer un membre de mon entourage (parents, amis, profs, etc.) si je passe une période difficile;</label>
            <br></br>
            <input type="checkbox" id="ac4" name="actions" />
            <label htmlFor="ac4">Consulter la page 18 de mon agenda pour avoir les coordonnées des actions externes pouvant me venir en aide.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="rc1" name="actions" />
            <label htmlFor="rc1">Faire le point sur ma situation avec mon aide pédagogique;</label>
            <br></br>
            <input type="checkbox" id="rc2" name="actions" />
            <label htmlFor="rc2">Consulter Marie-Josée Henry ou Suzanne Marquis au Centre de santé (G-206); des personnes-ressources sont là pour moi.</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur Y - Santé physique: prendre soin de moi et favoriser un équilibre personnel.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ay1" name="actions" />
            <label htmlFor="ay1">Faire le point sur mes habitudes de vie (activités physiques, sommeil, alimentation, etc.);</label>
            <br></br>
            <input type="checkbox" id="ay2" name="actions" />
            <label htmlFor="ay2">Vérifier la place que j'accorde dans ma vie aux activités de détente, de repos et de loisirs;</label>
            <br></br>
            <input type="checkbox" id="ay3" name="actions" />
            <label htmlFor="ay3">Agencer mon horaire d'étude avec mon horaire de vie;</label>
            <br></br>
            <input type="checkbox" id="ay4" name="actions" />
            <label htmlFor="ay4">Rechercher des moyens à privilégier pour me garder en forme physique.</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="ry1" name="actions" />
            <label htmlFor="ry1">Consulter Marie-Josée Henry ou Suzanne Marquis au Centre de santé (G-206); infirmière, nutritionniste (pour un bilan de santé et des conseils);</label>
            <br></br>
            <input type="checkbox" id="ry2" name="actions" />
            <label htmlFor="ry2">Rencontrer mon aide pédagogique: conciliation horaire de cours et de vie;</label>
            <br></br>
            <input type="checkbox" id="ry3" name="actions" />
            <label htmlFor="ry3">Consulter le centre sportif: information et inscription à des activités parascolaires (Stéphane Lebrun, D-019);</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur ¥ - Santé mentale: garder mon équilibre.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="a¥1" name="actions" />
            <label htmlFor="a¥1">Rechercher des moyens à privilégier pour garder mon équilibre;</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="r¥1" name="actions" />
            <label htmlFor="r¥1">Consulter Marie-Josée Henry ou Suzanne Marquis au Centre de santé (G-206); des personnes-ressources et de la documentation. Il n'y a pas de honte à penser à son équilibre!</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="facteur-container">
      <h2>Facteur $ - Situation socio-économique: l'argent, j'apprends à m'en servir et à en demeurer le maître.</h2>
      <div className="facteur-section">
        <div className="actions">
        <div className="actions">
          <h3>Actions Personnelles</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="a$1" name="actions" />
            <label htmlFor="a$1">Faire le point sur mon budget;</label>
            <br></br>
            <input type="checkbox" id="a$2" name="actions" />
            <label htmlFor="a$2">Prendre des informations sur les possibilités d'aide financière;</label>
            <br></br>
            <input type="checkbox" id="a$3" name="actions" />
            <label htmlFor="a$3">M'inscrire à un atelier sur le budget de l'ACEF (867-8545).</label>
        </ul>
        </div>
        <div className="ressources">
        <div className="ressources">
          <h3>Ressources du Collège</h3>
          </div>
          
          <ul>
            <input type="checkbox" id="r$1" name="actions" />
            <label htmlFor="r$1">Consulter Sylvie Roussignol au Service d'aide financière (Prêts & bourses) au local B-147;</label>
            <br></br>
            <input type="checkbox" id="r$2" name="actions" />
            <label htmlFor="r$2">Faire appel à Sylvie Roussignol (B-147) pour avoir recours à du dépannage alimentaire, etc.</label>
        </ul>
        </div>
      </div>
    </div>

    <div className="basPage-titre">
    <p>©Autorisation de reproduction de la part du Cégep de Limoilou</p>
    <h3>VOICI LA LISTE DES CONSEILLERS(ERES) DU SERVICE DE CONSULTATION:</h3>
    </div>
    <div className="basPage-container">
    <div>
    <tr>
    <p>Pierre Boucher</p>
    <br></br>
    <p>Maud Cloutier</p>
    <br></br>
    <br></br>
    <p>Danielle Raymond</p>
    <br></br>
    <br></br>
    <p>Caroline Simard</p>
    <br></br>
    <br></br>
    <p>Isabelle Wagner</p>
    </tr>
    </div>
    <div>
    <tr>
    <p>Aide pédagogiques individuelle</p>
    <br></br>
    <p>Conseillère d'orientation<br></br>Aide pédagogiques individuelle</p>
    <br></br>
    <p>Conseillère en information scolaire et professionnelle<br></br>Aide pédagogiques individuelle</p>
    <br></br>
    <p>Conseillère d'orientation<br></br>Aide pédagogiques individuelle</p>
    <br></br>
    <p>Conseillère en formation scolaire<br></br>Aide pédagogiques individuelle</p>
    </tr>
    </div>
    </div>
    <button onClick={handleGoToFinFormulaire} className="next-button">
      Terminer le formulaire et envoyer les reponses
    </button>
    <button onClick={handleGoToQuestionnaireMonProgramme} className="next-button">
        Retour au Questionnaire Mon Programme
      </button>
  </div>
  );
};


export default QuestionnaireMoyenPourReussir;
