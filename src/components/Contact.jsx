import { Send, Mail, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Get In Touch</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Let's talk about everything!</h3>
            <p className={styles.infoDesc}>
              Don't like forms? Send me an email directly. I'm always open to discussing web development jobs, collaborative projects, or new opportunities.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:srivastava.akarsh2807@gmail.com">srivastava.akarsh2807@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+916387281150">+91-6387281150</a>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Subject" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Message" rows="5" required className={styles.input}></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
