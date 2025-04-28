import teamData from "../assets/Team.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import "./SobreNos.css";

const SobreNos = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".team-member",
      { opacity: 1, y: 0 },
      { delay: stagger(0.1), duration: 0.5, ease: "easeInOut" }
    );
  }, [animate]);

  return (
    <div ref={scope}>
      <Header />
      <div className="sobre-nos-container">
        <h1 className="page-title">Sobre Nós</h1>
        <div className="team-grid">
          {teamData.team.map((member, index) => (
            <motion.div
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              key={`member-${index}`}
            >
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image"
                  loading="lazy"
                />
              </div>
              <div className="member-text-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                <a
                  href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="member-social"
                >
                  {member.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SobreNos;