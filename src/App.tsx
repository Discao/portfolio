import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./assets/App.css";
import projetos from "./assets/Projetos.json";
import ProjectDetails from './components/ProjectDetails';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".cascade-item",
      { opacity: 1, y: 0 },
      { delay: stagger(0.1), duration: 0.5, ease: "easeInOut" }
    );
  }, [animate]);

  return (
    <div ref={scope}>
      <Header />
      <div className="projects-container">
        {projetos.projects.map((projeto, index) => (
          <Link to={`/project/${index}`} className="container" key={index}>
            <motion.div
              className="cascade-item"
              initial={{ opacity: 0, y: 20 }}
            >
              <div className="info">
                <img src={projeto.image} alt={projeto.name} className="default-image" />
                <img src={projeto.hoverImage} alt={projeto.name} className="hover-image" />
                <div className="text-row">
                  <h1 className="name">{projeto.name}</h1>
                  <h2 className="category">{projeto.category}</h2>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;