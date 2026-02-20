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
        type: "professional",
        role: "National End User Computing Engineer Associate",
        company: "Metropolitan Police Service",
        summary:
          "TBD",
        points: [
          "TBD",
        ],
      },
      {
        year: "2023",
        type: "professional",
        role: "BSc Computer Science",
        company: "University of Leicester",
        summary:
          "TBD",
        points: [
          "TBD",
        ],
      },
      {
        year: "2023",
        type: "practice",
        role: "TryHackMe",
        summary:
          "TBD",
        points: [
          "TBD",
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
