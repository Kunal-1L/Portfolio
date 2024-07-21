import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const profileDetails = [
    {
      front: {
        icon:<FaGithub className={styles.icon}/>,
        content: 'Github'

      },
      back: "https://github.com/Kunal-1L",
    },
    {
        front: {
          icon: <SiLeetcode className={styles.icon}/>,
          content: 'Leetcode'
        },
        back: "https://leetcode.com/u/NoOneCoder/",
      },
    {
      front: {
        icon: <FaLinkedin className={styles.icon}/>,
        content: 'LinkedIn'
      },
      back: "linkedin.com/in/kunal-kumar-a1324624a",
    }
  ];
  const contactDetails = [
    {
      front: {
        icon:<FaPhone 
        className={styles.icon}/>,
        content: 'Phone'

      },
      back: "9045618221",
    },
    {
        front: {
          icon: <MdEmail 
          className={styles.icon}/>,
          content: 'Email'
        },
        back: "kumar180kunal@gmail.com",
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
      <div className={styles.section}>Profile Details</div>
      <div className={styles.projectSection}>
        {profileDetails.map((project, index) => (
          <div
            key={index}
            className={styles.projectItem}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            {hoveredIndex === index ? <a href={project.back} target="_blank">{project.front.icon} {project.back}</a> : <div>{project.front.icon} <strong>{project.front.content} </strong></div>}
          </div>
        ))}
      </div>
      <div className={styles.section}>Contact Details</div>
      <div className={styles.projectSection}>
        {contactDetails.map((project, index) => (
          <div
            key={index}
            className={styles.projectItem}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            {hoveredIndex === index ? <div style={{color:'#321c15'}}>{project.front.icon} {project.back}</div> : <div>{project.front.icon} <strong style={{color:'#321c15'}}>{project.front.content} </strong></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
