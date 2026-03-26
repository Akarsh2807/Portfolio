import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Education & Achievements</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.gridContainer}>
          {/* Education Column */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <GraduationCap size={28} className={styles.icon} />
              <h3>Education</h3>
            </div>
            
            <div className={styles.cardList}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>B.Tech CSE</h4>
                <div className={styles.cardMeta}>
                  <span className={styles.inst}>Lovely Professional University (LPU)</span>
                  <span className={styles.year}>2023 – Present</span>
                </div>
                <p className={styles.score}>CGPA: <span className={styles.highlight}>5.27</span></p>
              </div>

              <div className={styles.card}>
                <h4 className={styles.cardTitle}>Intermediate (12th)</h4>
                <div className={styles.cardMeta}>
                  <span className={styles.inst}>Blossom School</span>
                </div>
                <p className={styles.score}>Percentage: <span className={styles.highlight}>61%</span></p>
              </div>

              <div className={styles.card}>
                <h4 className={styles.cardTitle}>Matriculation (10th)</h4>
                <div className={styles.cardMeta}>
                  <span className={styles.inst}>Blossom School</span>
                </div>
                <p className={styles.score}>Percentage: <span className={styles.highlight}>84%</span></p>
              </div>
            </div>
          </div>

          {/* Training & Achievements Column */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <BookOpen size={28} className={styles.icon} />
              <h3>Training</h3>
            </div>
            
            <div className={styles.cardList}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>Java Bootcamp</h4>
                <div className={styles.cardMeta}>
                  <span className={styles.inst}>LPU</span>
                  <span className={styles.year}>Jun 2025 – Jul 2025</span>
                </div>
                <ul className={styles.bulletList}>
                  <li>Learned DSA, recursion, and dynamic programming</li>
                  <li>Practiced competitive coding problems</li>
                </ul>
              </div>
            </div>

            <div className={styles.columnHeader} style={{ marginTop: '2rem' }}>
              <Trophy size={28} className={styles.icon} />
              <h3>Achievements</h3>
            </div>
            
            <div className={styles.cardList}>
              <div className={styles.card}>
                <ul className={styles.bulletList}>
                  <li>Solved <span className={styles.highlight}>150+</span> coding problems</li>
                  <li><span className={styles.highlight}>5-Star</span> C++ rating on HackerRank</li>
                </ul>
              </div>
            </div>

            <div className={styles.columnHeader} style={{ marginTop: '2rem' }}>
              <Award size={28} className={styles.icon} />
              <h3>Certificates</h3>
            </div>
            
            <div className={styles.cardList}>
              <div className={styles.card}>
                <ul className={styles.bulletList}>
                  <li>Privacy and Security – <strong>NPTEL</strong></li>
                  <li>Generative AI – <strong>Infosys</strong></li>
                  <li>ChatGPT Prompt Engineering – <strong>Infosys</strong></li>
                  <li>Cyber Job Simulation – <strong>Deloitte</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
