window.PORTFOLIO_DATA = {
  tabs: [
    { key: "about", label: "About", color: "#b8e7ff", active: "#70cfff" },
    { key: "projects", label: "Projects", color: "#b5e48c", active: "#99d98c" },
    { key: "experience", label: "Experience", color: "#ffee9c", active: "#ffb95e" },
    { key: "contact", label: "Contact", color: "#ffbfe4", active: "#ff96d3" },
  ],
  about: {
    name: "Sophie Whyte",
    role: "Student / EUC Intern @ Met Police",
    location: "London",
    experience: "1 year Work Experience",
    heading: "About Me",
    paragraph1:
      "Curious CS Student @ Uni of Leicester graduating 2027 with a keen eye for detail and a love for problem solving. Currently studying Security+ with a solid foundation in networking.",
    paragraph2:
      "Outside of work, I participate in hackathons and play Sudoku.",
    note: "Passionate about working in high impact roles",
  },
  projectFilterConfig: {
    primaryFilters: ["Python"],
  },
  contact: {
    email: "whytesophiemai@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/sophie-mai-whyte/",
    linkedinText: "Sophie Whyte",
    githubUrl: "https://github.com/SophieWhyte",
    githubText: "SophieWhyte",
  },
  experience: {
    title: "Experience",
    subtitle: "A timeline of the roles and projects that shaped my work",
    items: [
      {
        year: "2025",
        role: "Senior Full Stack Developer",
        company: "Northstar Labs",
        summary:
          "Led delivery of product features across frontend and backend, improving release speed and platform reliability.",
        points: [
          "Owned end-to-end development of customer dashboard initiatives",
          "Mentored 3 junior developers and introduced PR quality checklists",
          "Reduced API response times by 35% through query and caching improvements",
        ],
      },
      {
        year: "2023",
        role: "Full Stack Developer",
        company: "Bright Pixel Studio",
        summary:
          "Built client-facing web apps with a strong focus on usability, maintainability, and performance.",
        points: [
          "Shipped 8+ production features across React and Node.js services",
          "Partnered with design to launch a reusable UI component library",
          "Integrated analytics dashboards used by product and marketing teams",
        ],
      },
      {
        year: "2021",
        role: "Frontend Developer",
        company: "Orbit Creative",
        summary:
          "Developed responsive interfaces and interactive components for agency and startup clients.",
        points: [
          "Implemented responsive design system across multiple client sites",
          "Improved Lighthouse performance scores from mid-60s to 90+",
          "Collaborated closely with backend teams to stabilize API integrations",
        ],
      },
    ],
  },
  projects: [
    {
      title: "CV Builder (Current)",
      description:
        "An Excel to Word converter with recommender logic.",
      tech: ["Python"],
      gradient: "linear-gradient(135deg, #b8e7ff, #ffffff)",
    },
  ],
};
