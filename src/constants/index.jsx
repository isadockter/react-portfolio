import proj1 from '../assets/recipe-details.png';
import proj2 from '../assets/proj2.png';


export const navItems = [
  { label: "About", href: "#" },
  { label: "Projects", href: "#" }
];

export const skills = [
  { category: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Bootstrap",
      "Tailwind CSS"
    ]
  }
  
  
];
export const projects = [
  {
    title: "HealthyBytes",
    description: "Senior capstone project where we are building an information system from scratch, this requires effective project management by implementing SCRUM methodologies. My group chose to look into the problem of college students health being impacted by busy schedules, strict budgets, limited nutritional education, etc.After spending the 1st semester conducting various research methods and preparing for the build process of our system.",
    technologies: ["HTML", "Bootstrap", "PHP", "MySQL"],
    projectImg: proj1,
    codeLink: "https://github.iu.edu/info-capstone-2024/team-36",
    demoLink: "https://cgi.luddy.indiana.edu/~team36/index.php",
  },
  {
    title: "Outdoor Adventures",
    description: "A trip management application that enables users to seamlessly add, edit, and delete trips, as well as manage members. I gained a solid foundation of web development with this project, especially with routing and working with frameworks",
    technologies: ["HTML", "Bootstrap", "Python", "Flask", "MySQL"],
    projectImg: proj2,
    codeLink: "https://github.iu.edu/idockter/I211_project",
    demoLink: "https://cgi.luddy.indiana.edu/~idockter/I211_project.cgi/",
  },
  // Add more projects here if needed
];
// About
// Projects
// About Me: This section can provide a brief introduction to who you are, your academic background, areas of expertise, and interests.

// Skills: Highlight your skills and proficiency in various areas such as web development, UI/UX design, programming languages, tools, and technologies.

// Experience: Detail any relevant work experience, internships, or projects you've worked on, emphasizing your roles, responsibilities, and accomplishments.

// Education: Provide information about your education, including your degree program, university, major, minor, and any relevant coursework or academic achievements.