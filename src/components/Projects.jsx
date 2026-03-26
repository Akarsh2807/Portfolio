import { Folder, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "LK - Car Service & Washing Website",
      period: "Aug 2025 – Sep 2025",
      description: "Built a comprehensive React-based web application for vehicle service bookings. Converted complex mobile UI designs to a fully responsive web interface while implementing advanced booking flows and slot management systems.",
      techStack: ["ReactJS", "CSS Modules", "Responsive Design", "UI/UX"],
      githubUrl: "https://github.com/AkarshSrivastava",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Maharaja Palace – Hotel Booking Platform",
      period: "Nov 2025 – Dec 2025",
      description: "Developed a secure Full-Stack MERN booking system for a hotel platform. Built robust API endpoints, implemented secure JWT authentication, and integrated MongoDB for data persistence alongside an email notification microservice.",
      techStack: ["MongoDB", "Express", "ReactJS", "NodeJS", "JWT"],
      githubUrl: "https://github.com/AkarshSrivastava",
      liveUrl: "#"
    }
  ];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <Folder size={36} className={styles.folderIcon} />
                <div className={styles.links}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectPeriod}>{project.period}</div>
              
              <p className={styles.projectDesc}>
                {project.description}
              </p>
              
              <div className={styles.techStack}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
