import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="homepage">
      <h2 className="homepage__title">ANGELO YAP</h2>
      <nav className="homepage__nav">
        <Link to="/portfolio">
          <p className="homepage__nav-item">Porfolio</p>
        </Link>
        <Link to="/about">
          <p className="homepage__nav-item">About</p>
        </Link>
        <Link to="/contact">
          <p className="homepage__nav-item">Contact</p>
        </Link>
      </nav>
    </main>
  );
};
export default HomePage;
