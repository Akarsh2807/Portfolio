import { User, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Who I Am</h3>
            <p className={styles.text}>
              I'm Akarsh Srivastava, a passionate Computer Science Engineering student currently studying at Lovely Professional University. I specialize in Full-Stack Developerment with a strong focus on the MERN stack and UI development.
            </p>
            <p className={styles.text}>
              I believe in building performant, visually appealing, and highly interactive user interfaces. My journey involves solving complex problems, writing clean code, and constantly adapting to new technologies.
            </p>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}><User size={20} /></div>
              <div>
                <span className={styles.label}>Name</span>
                <span className={styles.value}>Akarsh Srivastava</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}><Mail size={20} /></div>
              <div>
                <span className={styles.label}>Email</span>
                <a href="mailto:srivastava.akarsh2807@gmail.com" className={styles.valueLink}>srivastava.akarsh2807@gmail.com</a>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}><Phone size={20} /></div>
              <div>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>+91-6387281150</span>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}><MapPin size={20} /></div>
              <div>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>Punjab, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a href="https://github.com/Akarsh2807" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
            <FaGithub size={24} />
            <span>GitHub</span>
            <ExternalLink size={14} className={styles.externalIcon} />
          </a>
          <a href="https://www.linkedin.com/in/akarsh-b13854298/" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
            <ExternalLink size={14} className={styles.externalIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
