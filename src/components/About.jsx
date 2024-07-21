import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.section}>Education</div>
      <div className={styles.educationSection}>
        <div className={styles.educationItem}>
          <div className={styles.educationContent}>
            <strong>
              Science in Class 10<sup>th</sup>
            </strong>
            <br /><br />
            Shri Guru Ram Rai Public School, 2020
            <br />
            Percentage: 95.6%
          </div>
        </div>
        <div className={styles.educationItem}>
          <div className={styles.educationContent}>
            <strong>
              Science in Class 12<sup>th</sup>
            </strong>
            <br /><br />
            Shri Guru Ram Rai Public School, 2022
            <br />
            Percentage: 98%
          </div>
        </div>
        <div className={styles.educationItem}>
          <div className={styles.educationContent}>
            <strong>Bachelor's Degree in CSE</strong>
            <br /><br />
            Graphic Era University, 2022-2026
            <br />
            GPA: 9.64
          </div>
        </div>
      </div>

      <div className={styles.section}>Domains</div>
      <div className={styles.educationSection}>
        <div className={styles.educationItem}>
          <div className={styles.educationContent}>
            <strong>Programming</strong>
            <br /><br />
            Practice & Implement ideas through programming skills.
          </div>
        </div>
        <div className={styles.educationItem}>
          <div className={styles.educationContent}>
            <strong>Full Stack Development</strong>
            <br /><br />
            Developing and Exploring Cutting-Edge Web Applications{" "}
          </div>
        </div>
        <div className={styles.educationItem}>
          <div className={styles.educationContent}>
            <strong>Natural Language Processing</strong>
            <br /><br />
            Building Foundations, Seeking Deeper Knowledge{" "}
          </div>
        </div>
      </div>

      <div className={styles.section}>Skills</div>
      <div className={styles.skillsSection}>
        <div className={styles.skill}>HTML</div>
        <div className={styles.skill}>CSS</div>
        <div className={styles.skill}>React.js</div>
        <div className={styles.skill}>MongoDb</div>
        <div className={styles.skill}>MySQL</div>
        <div className={styles.skill}>Flask</div>
        <div className={styles.skill}>Python</div>
        <div className={styles.skill}>C</div>
        <div className={styles.skill}>C++</div>
        <div className={styles.skill}>Java</div>
        <div className={styles.skill}>Data Structures & Algorithms</div>
      </div>
    </div>
  );
};

export default About;
