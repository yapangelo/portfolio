import "./HomePage.scss";
import { Link } from "react-router-dom";
import circle from "../../assets/bg-circle.png";
import wave from "../../assets/bg-wave.png";
import name from "../../assets/text/name.svg";

const HomePage = () => {
  return (
    <main className="homepage">
      <div className="homepage__bg-circle">
        <img src={circle} alt="circle" className="homepage__circle" />
        <img src={wave} alt="wave" className="homepage__wave" />
      </div>
      <div className="homepage__text">
        <img src={name} alt="angelo yap" className="homepage__title" />
        <nav className="homepage__nav">
          <Link to="/portfolio" className="homepage__nav-link">
            <p className="homepage__nav-item">Porfolio</p>
          </Link>
          <Link to="/about" className="homepage__nav-link">
            <p className="homepage__nav-item">About</p>
          </Link>
          <Link to="/contact" className="homepage__nav-link">
            <p className="homepage__nav-item">Contact</p>
          </Link>
        </nav>
      </div>
    </main>
  );
};
export default HomePage;
