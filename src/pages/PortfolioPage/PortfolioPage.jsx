import "./PortfolioPage.scss";

const PortFolioPage = () => {
  return (
    <div className="contactpage">
      <h2 className="portfoliopage__title">PORTFOLIO</h2>
      <main className="portfoliopage__site-container">
        <ul className="portfoliopage__site-list">
          <li className="portfoliopage__site-list-item">songsheeter</li>
          <li className="portfoliopage__site-list-item">byogawellness</li>
          <li className="portfoliopage__site-list-item">rapc</li>
        </ul>
      </main>
      <div className="portfoliopage__goal">
        <p className="portfoliopage__goal-message">
          I aim to make this list longer.
        </p>
      </div>
    </div>
  );
};
export default PortFolioPage;
