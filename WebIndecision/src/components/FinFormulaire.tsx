import Rayman from '../photo/Rayman.png';
import Banana from '../photo/Banana.jpg';
import './FinFormulaire.css';

const FinFormulaire = () => {

  return (
    <div className="form-container">
      <h1>VOUS AVEZ FINI LE FORMULAIRE!</h1>
      <div className="imageFin">
          <img src={Rayman} alt="Rayman" className="Rayman" />
        </div>
      <h2>Un adminstrateur va s'occuper de votre dossier sous peu de temps</h2>
      <div className="imageFin">
          <img src={Banana} alt="Banana" className="Banana" />
        </div>
    </div>
  );
};

export default FinFormulaire;
