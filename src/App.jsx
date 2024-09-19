import "./App.css";
import { BrowserRoutes, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRoutes>
      <Routes>
        <Route path="/home" />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/portfolio" />
      </Routes>
    </BrowserRoutes>
  );
}

export default App;
