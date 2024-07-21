import styles from "./Portfolio.module.css";
import { useState } from "react";
const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectDetails = [
    {
      front: "Big Integer Library",
      back: "C library for arithmetic on large numbers.",
    },
    {
      front: "Car Rental Web App",
      back: "Web app with HTML, CSS, Flask, and MySQL for car rental operations.",
    },
    {
      front: "8085 Emulator",
      back: "C++ emulator for 8085 microprocessor Assembly programs.",
    },
    {
      front: "Connect To Care Web App",
      back: "Web app for symptom analysis, precautions, and specialist appointments.",
    },
    {
      front: "Blog App",
      back: "Basic blog app with React.js, Flask, MongoDB, and MySQL.",
    },
  ];
  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.section}>Projects</div>
      <div className={styles.projectSection}>
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectItem} ${hoveredIndex === index ? styles.back : styles.front}`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            {hoveredIndex === index ? project.back : project.front}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
