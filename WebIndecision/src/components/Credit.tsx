import GoodJob from '../photo/RickGoodjob.gif';

const Credit = () => {
  return (
    <div className="credits-container">
      <h1>Crédits</h1>
      <p>Créateur</p>
      <p>Nom: Chalons</p>
      <p>Prénom: David</p>
      <img src={GoodJob} alt="GoodJob animée" />
    </div>
  );
};

export default Credit;