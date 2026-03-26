import { Code2, Monitor, Database, TerminalSquare } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} />,
      skills: ["Python", "C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Frameworks & Web",
      icon: <Monitor size={24} />,
      skills: ["ReactJS", "NodeJS", "Express", "HTML5", "CSS3"]
    },
    {
      title: "Tools & Databases",
      icon: <Database size={24} />,
      skills: ["IntelliJ", "Figma", "Git", "GitHub", "MySQL", "MongoDB"]
    },
    {
      title: "Soft Skills",
      icon: <TerminalSquare size={24} />,
      skills: ["Time Management", "Leadership", "Adaptability", "Problem Solving"]
    }
  ];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>My Skills</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {category.icon}
                </div>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              
              <div className={styles.tagsContainer}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
