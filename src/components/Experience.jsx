import { Briefcase, Calendar } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "Local Konnect (Startup)",
      period: "Oct 2025 – Dec 2025",
      description: [
        "Developed responsive frontend interfaces for ride booking and services.",
        "Built reusable UI components and optimized workflows.",
        "Designed car service and scheduling interfaces."
      ]
    }
  ];

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <Briefcase size={20} />
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.roleHeader}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.periodBadge}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <h4 className={styles.company}>{exp.company}</h4>
                
                <ul className={styles.descriptionList}>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>
                      <span className={styles.bullet}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
