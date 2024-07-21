import styles from './Home.module.css';

const Home = () => {
    const details = {
        image: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
        resume:'https://drive.google.com/file/d/162SdEMrtFzUIpVAikWlU8cdfGitFzb2U/view'
    };

    return (
      <div className={styles.homeContainer}>
          <div className={styles.personal_img}>
              <img src={details.image} alt="Kunal Kumar" />
          </div>
          <div className={styles.personal_info}>
              <h1>Hi, I'm Kunal</h1>
              <p>Exploring and Learning Technologies</p>
          </div>
          <div className={styles.resume_link}>
              <a href={details.resume} target='_blank' rel='noopener noreferrer'>Resume</a>
          </div>
      </div>
  );
};

export default Home;
