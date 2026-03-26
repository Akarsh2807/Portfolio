import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>© {new Date().getFullYear()} Akarsh Srivastava. All Rights Reserved.</p>
            <p className={styles.subtext}>Designed & Built with React & Vanilla CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
