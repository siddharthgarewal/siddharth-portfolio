// Mock data for Siddharth Garewal's portfolio
export const profileData = {
  personalInfo: {
    name: "Siddharth Garewal",
    title: "Software Engineer",
    subtitle: "Frontend Developer with 3+ years experience at EPAM Systems",
    bio: "A passionate Frontend Developer with expertise in creating beautiful, responsive, and user-friendly web applications. Specialized in React.js and modern frontend technologies, I transform creative designs into seamless interactive experiences.",
    location: "India",
    email: "sidgarewal@gmail.com",
    phone: "+91 9926462001",
    linkedin: "https://linkedin.com/in/siddharthgarewal",
    github: "https://github.com/siddharthgarewal",
    portfolio: "https://siddharthgarewal.dev",
  },

  skills: {
    coreTech: [
      { name: "JavaScript", icon: "Code" },
      { name: "TypeScript", icon: "Code" },
      { name: "HTML5", icon: "Code" },
      { name: "CSS", icon: "Code" },
      { name: "RESTful APIs", icon: "Code" },
      { name: "Data Structure", icon: "Code" },
    ],
    frameworks: [
      { name: "ReactJS", icon: "Zap" },
      { name: "Redux Toolkit", icon: "Zap" },
      { name: "RTK Query", icon: "Zap" },
      { name: "GraphQL", icon: "Zap" },
      { name: "Micro Frontends", icon: "Zap" },
      { name: "Module Federation", icon: "Zap" },
    ],
    styling: [
      { name: "SASS/SCSS", icon: "Palette" },
      { name: "CSS", icon: "Palette" },
      { name: "Design Principle", icon: "Palette" },
      { name: "Design Pattern", icon: "Palette" },
    ],
    tools: [
      { name: "Webpack 5", icon: "Wrench" },
      { name: "Jest", icon: "Wrench" },
      { name: "Jasmine", icon: "Wrench" },
      { name: "React Testing Library", icon: "Wrench" },
    ],
  },

  experience: [
    {
      id: 1,
      company: "EPAM Systems",
      position: "Software Engineer",
      duration: "Feb 2022 - Present",
      location: "India",
      projects: [
        {
          name: "Leucipa - Baker Hughes",
          duration: "Jun 2023 – Till Now",
          description:
            "Key Engineer on the flagship digital initiative for production optimization at Baker Hughes with a 'Cloud first' (SaaS) deployment model. Supported by six Scrum teams, Project Tycho focuses on delivering its MVP release with a strong emphasis on technical excellence and user experience.",
          technologies: [
            "ReactJS",
            "SASS/SCSS",
            "RTK Query",
            "Redux Toolkit",
            "React Testing Library",
            "Material UI",
            "Webpack",
            "GitHub",
            "Azure Boards",
            "OpenSearch",
          ],
          achievements: [
            "Designed, developed, and built reusable React components with strong emphasis on user experience",
            "Translated Figma designs into functional, high-quality solutions",
            "Implemented and configured micro frontends using Webpack for modular and scalable architecture",
            "Proactively identified and resolved critical bugs during the release phase, ensuring smooth deployment",
            "Collaborated with cross-functional team of 9 developers, 4 QA members, 2 BAs, 1 DM, and 1 PM",
            "Ensured minimal impact on user experience through meticulous release management",
          ],
        },
        {
          name: "SpeakEasy - Google Internal Telecom System",
          duration: "Feb 2023 – May 2023",
          description:
            "Developed and implemented user stories independently in Angular Dart for Google's internal telecommunication system via web, focusing on the FLOWMAKER application.",
          technologies: [
            "Angular Dart",
            "JavaScript",
            "RPC Protocol Buffers",
            "Scuba",
            "Bolt",
            "Google Internal Tools",
          ],
          achievements: [
            "Developed and implemented user stories independently in Angular Dart",
            "Collaborated with team to develop and improve the Highlight Changes feature",
            "Ensured high performance and compatibility across various platforms and devices",
            "Wrote extensive unit tests using automated TDD tasks",
            "Followed Agile SCRUM methodologies with daily standups and sprint planning",
            "Maintained effective communication with team members and stakeholders",
          ],
        },
        {
          name: "LoopIT - Development and Testing Platform",
          duration: "Aug 2022 – Dec 2022",
          description:
            "Developed frontend and mobile applications for Proactive Technology Systems using Angular 10 and Ionic 6, focusing on both web and mobile implementations.",
          technologies: [
            "Angular 10",
            "Ionic 6",
            "Angular 13",
            "HTML5",
            "CSS3",
            "Angular Material",
            "Angular Flex Layout",
          ],
          achievements: [
            "Implemented frontend/web requirements using Angular 10 and Angular Material",
            "Developed iOS and Android applications using Ionic 6",
            "Performed comprehensive unit testing to ensure code quality",
            "Communicated actively with team members and discussed project details",
            "Proposed optimal solutions for efficient project delivery",
            "Collaborated with QA team to resolve issues and ensure quality",
          ],
        },
        {
          name: "ESS (Employee Self Service) Portal",
          duration: "Feb 2022 – Aug 2022",
          description:
            "Developed a comprehensive portal for EPAM India HR Business Unit to process associate requests and minimize manual HR service efforts, including reference letters, compensation letters, and separation letters.",
          technologies: [
            "Angular 8",
            "TypeScript",
            "MySQL",
            "Git",
            "JIRA",
            "Bootstrap CSS",
            "Jasmine",
          ],
          achievements: [
            "Developed business logic using Angular 8 UI framework in TypeScript",
            "Ensured all coding practices followed best practices and standards",
            "Wrote comprehensive unit test cases using Jasmine framework",
            "Worked with Agile methodology to complete project within timeframe",
            "Implemented features for Reference Letters, Compensation Letters, and Separation Letters",
            "Maintained Associates Personal Records system",
          ],
        },
        {
          name: "Regular Pricing and SKU Flighting Support - Canadian Tire",
          duration: "Mar 2022 – May 2022",
          description:
            "Worked on pricing and SKU management system for Canadian Tire Corporation, implementing new features and solutions within existing codebase while handling large amounts of data.",
          technologies: [
            "Angular",
            "TypeScript",
            "NgRx",
            "MSSQL",
            "Git",
            "SCSS",
            "Bootstrap",
            "Jenkins",
          ],
          achievements: [
            "Implemented new features and solutions in existing codebase",
            "Worked with large amounts of data in table format",
            "Performed debugging using Chrome Dev tools for specific bugs",
            "Maintained active communication with team members and stakeholders",
            "Participated in scrum ceremonies including grooming, retro, and daily scrum",
            "Collaborated with Business Analysts and Backend teams",
          ],
        },
      ],
    },
  ],

  education: [
    {
      id: 1,
      institution: "Chameli Devi Group of Institution",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      year: "2017-2021",
      location: "India",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Enterprise Energy Management",
      description:
        "React-based dashboard for Baker Hughes energy management system with real-time monitoring and analytics.",
      technologies: ["React", "TypeScript", "Redux", "Material UI", "Chart.js"],
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
      features: [
        "Real-time data visualization",
        "Responsive design",
        "WCAG 2.1 AA compliance",
        "Automated testing coverage",
      ],
    },
    {
      id: 2,
      title: "Workflow Automation Platform",
      description:
        "Angular Dart application for Google's internal workflow automation with advanced state management.",
      technologies: ["Angular Dart", "JavaScript", "Scuba", "Bolt"],
      category: "Enterprise Tool",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
      features: [
        "Drag-and-drop workflow builder",
        "Advanced state management",
        "TDD implementation",
        "Cross-team collaboration",
      ],
    },
    {
      id: 3,
      title: "Mobile-First CRM",
      description:
        "Ionic 6 mobile application for customer relationship management with offline capabilities.",
      technologies: ["Angular", "Ionic", "TypeScript", "SCSS"],
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
      features: [
        "Offline-first architecture",
        "Progressive Web App",
        "Push notifications",
        "Data synchronization",
      ],
    },
  ],

  achievements: [
    {
      id: 1,
      title: "WCAG 2.1 AA Compliance Expert",
      description:
        "Successfully implemented accessibility standards across all major projects",
      year: "2023",
      icon: "accessibility",
    },
    {
      id: 2,
      title: "Clean Code Champion",
      description:
        "Recognized for consistent implementation of SOLID principles and maintainable code",
      year: "2023",
      icon: "code",
    },
    {
      id: 3,
      title: "Cross-Platform Development",
      description:
        "Successfully delivered projects across React, Angular, and Ionic platforms",
      year: "2022",
      icon: "devices",
    },
    {
      id: 4,
      title: "Test-Driven Development",
      description: "Implemented TDD practices resulting in 95% code coverage",
      year: "2022",
      icon: "test",
    },
  ],
};

export const blogPosts = [
  {
    id: 1,
    title: "Building Accessible React Components",
    excerpt:
      "Best practices for creating WCAG-compliant React components that work for everyone.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Accessibility",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["React", "Accessibility", "WCAG", "Frontend"],
  },
  {
    id: 2,
    title: "Redux Toolkit: State Management Made Simple",
    excerpt:
      "How Redux Toolkit simplifies state management in modern React applications.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "State Management",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["Redux", "React", "State Management", "TypeScript"],
  },
  {
    id: 3,
    title: "Clean Code Principles in Frontend Development",
    excerpt:
      "Applying SOLID principles to write maintainable and scalable frontend code.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Best Practices",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["Clean Code", "SOLID", "JavaScript", "Best Practices"],
  },
];

export const contactInfo = {
  email: "sidgarewal@gmail.com",
  phone: "+91 9926462001",
  location: "Indore, India",
  timezone: "IST (UTC+5:30)",
  availability: "Available for new opportunities",
  socialLinks: {
    linkedin: "https://linkedin.com/in/siddharthgarewal",
    github: "https://github.com/siddharthgarewal",
    twitter: "https://twitter.com/siddharthgarewal",
    portfolio: "https://siddharthgarewal.dev",
  },
};
