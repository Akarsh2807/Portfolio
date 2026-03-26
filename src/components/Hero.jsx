import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.blob}></span>
            Available for new opportunities
          </div>
          
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Akarsh</span><br />
            Srivastava
          </h1>
          
          <h2 className={styles.subtitle}>
            Full-Stack Developer & CS Engineering Student
          </h2>
          
          <p className={styles.description}>
            I craft visually stunning, highly interactive web experiences and robust backend systems. 
            Passionate about solving complex problems through clean code.
          </p>
          
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Optional decorative visual element */}
        <div className={styles.visual}>
          <div className={styles.codeWindow}>
            <div className={styles.windowHeader}>
              <span className={styles.dot} style={{ background: '#ff5f56' }}></span>
              <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
              <span className={styles.dot} style={{ background: '#27c93f' }}></span>
            </div>
            <pre className={styles.codeLines}>
              <code><span className={styles.cKeyword}>const</span> <span className={styles.cVar}>developer</span> = {'{'}</code>
              <code>  <span className={styles.cProp}>name</span>: <span className={styles.cStr}>"Akarsh Srivastava"</span>,</code>
              <code>  <span className={styles.cProp}>skills</span>: [<span className={styles.cStr}>"React"</span>, <span className={styles.cStr}>"Node.js"</span>, <span className={styles.cStr}>"C++"</span>],</code>
              <code>  <span className={styles.cProp}>passion</span>: <span className={styles.cStr}>"Building cool stuff"</span></code>
              <code>{'}'};</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
