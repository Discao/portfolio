import { useParams } from "react-router-dom";
import projetos from "../assets/Projetos.json";
import "../assets/App.css";
import Header from "./Header";
import Footer from "./Footer";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

interface Project {
  name: string;
  category: string;
  client: string;
  year: string;
  description: string;
  images: string[];
}

function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const project: Project | undefined = projetos.projects[Number(projectId)];
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".cascade-item",
      { opacity: 1, y: 0 },
      { delay: stagger(0.1), duration: 0.5, ease: "easeInOut" }
    );
  }, [animate]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div ref={scope}>
      <Header />
      <div className="project-details-container">
        {/* Left Side: Text Information */}
        <motion.div
          className="project-info cascade-item"
          initial={{ opacity: 0, y: 20 }}
        >
          <h1>{project.name}</h1>
          <h3>{project.category}</h3>
          <p><span className="highlight">Client: </span>{project.client}</p>
          <p><span className="highlight">Year: </span>{project.year}</p>
          <p><span className="highlight">Description: </span>{project.description}</p>
        </motion.div>

        {/* Right Side: Scrollable Images */}
        <div className="project-images">
          {project.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${project.name} ${index + 1}`}
              className="cascade-item"
              initial={{ opacity: 0, y: 20 }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetails;