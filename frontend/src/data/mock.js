// Mock data for Siddharth Garewal's portfolio
export const profileData = {
  personalInfo: {
    name: "Siddharth Garewal",
    title: "Software Engineer",
    subtitle: "Frontend Developer with 3+ years experience at EPAM Systems",
    bio: "Experienced Front-end Developer proficient in building Web User Interfaces using Angular, ReactJS, HTML5, CSS3, and JavaScript. Specialized in developing single-page applications (SPAs) with extensive experience in all phases of SDLC and Agile methodologies.",
    location: "India",
    email: "siddharth.garewal@epam.com",
    phone: "+91 9876543210",
    linkedin: "https://linkedin.com/in/siddharthgarewal",
    github: "https://github.com/siddharthgarewal",
    portfolio: "https://siddharthgarewal.dev"
  },
  
  skills: {
    frontend: [
      { name: "Angular", level: 90, category: "framework" },
      { name: "ReactJS", level: 85, category: "framework" },
      { name: "Angular Dart", level: 80, category: "framework" },
      { name: "TypeScript", level: 90, category: "language" },
      { name: "JavaScript", level: 95, category: "language" },
      { name: "HTML5", level: 95, category: "markup" },
      { name: "CSS3", level: 90, category: "styling" },
      { name: "SASS/SCSS", level: 85, category: "styling" },
      { name: "Bootstrap CSS", level: 85, category: "ui" },
      { name: "Angular Material", level: 80, category: "ui" },
      { name: "Ionic", level: 80, category: "mobile" },
      { name: "Webpack", level: 75, category: "build" }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Visual Studio Code", level: 95 },
      { name: "JIRA", level: 85 },
      { name: "Confluence", level: 80 },
      { name: "Jenkins", level: 75 },
      { name: "Bitbucket", level: 80 },
      { name: "Jasmine", level: 85 },
      { name: "Karma", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "MSSQL", level: 70 },
      { name: "Node.js", level: 75 },
      { name: "NPM", level: 80 }
    ]
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
          name: "SpeakEasy - Google Internal Telecom System",
          duration: "Feb 2023 – Present",
          description: "Developed and implemented user stories independently in Angular Dart for Google's internal telecommunication system via web, focusing on the FLOWMAKER application.",
          technologies: ["Angular Dart", "JavaScript", "RPC Protocol Buffers", "Scuba", "Bolt", "Google Internal Tools"],
          achievements: [
            "Developed and implemented user stories independently in Angular Dart",
            "Collaborated with team to develop and improve the Highlight Changes feature",
            "Ensured high performance and compatibility across various platforms and devices",
            "Wrote extensive unit tests using automated TDD tasks",
            "Followed Agile SCRUM methodologies with daily standups and sprint planning",
            "Maintained effective communication with team members and stakeholders"
          ]
        },
        {
          name: "LoopIT - Development and Testing Platform",
          duration: "Aug 2022 – Dec 2022",
          description: "Developed frontend and mobile applications for Proactive Technology Systems using Angular 10 and Ionic 6, focusing on both web and mobile implementations.",
          technologies: ["Angular 10", "Ionic 6", "Angular 13", "HTML5", "CSS3", "Angular Material", "Angular Flex Layout"],
          achievements: [
            "Implemented frontend/web requirements using Angular 10 and Angular Material",
            "Developed iOS and Android applications using Ionic 6",
            "Performed comprehensive unit testing to ensure code quality",
            "Communicated actively with team members and discussed project details",
            "Proposed optimal solutions for efficient project delivery",
            "Collaborated with QA team to resolve issues and ensure quality"
          ]
        },
        {
          name: "ESS (Employee Self Service) Portal",
          duration: "Feb 2022 – Aug 2022",
          description: "Developed a comprehensive portal for EPAM India HR Business Unit to process associate requests and minimize manual HR service efforts, including reference letters, compensation letters, and separation letters.",
          technologies: ["Angular 8", "TypeScript", "MySQL", "Git", "JIRA", "Bootstrap CSS", "Jasmine"],
          achievements: [
            "Developed business logic using Angular 8 UI framework in TypeScript",
            "Ensured all coding practices followed best practices and standards",
            "Wrote comprehensive unit test cases using Jasmine framework",
            "Worked with Agile methodology to complete project within timeframe",
            "Implemented features for Reference Letters, Compensation Letters, and Separation Letters",
            "Maintained Associates Personal Records system"
          ]
        },
        {
          name: "Regular Pricing and SKU Flighting Support - Canadian Tire",
          duration: "Mar 2022 – May 2022",
          description: "Worked on pricing and SKU management system for Canadian Tire Corporation, implementing new features and solutions within existing codebase while handling large amounts of data.",
          technologies: ["Angular", "TypeScript", "NgRx", "MSSQL", "Git", "SCSS", "Bootstrap", "Jenkins"],
          achievements: [
            "Implemented new features and solutions in existing codebase",
            "Worked with large amounts of data in table format",
            "Performed debugging using Chrome Dev tools for specific bugs",
            "Maintained active communication with team members and stakeholders",
            "Participated in scrum ceremonies including grooming, retro, and daily scrum",
            "Collaborated with Business Analysts and Backend teams"
          ]
        }
      ]
    }
  ],

  education: [
    {
      id: 1,
      institution: "Chameli Devi Group of Institution",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      year: "2017-2021",
      location: "India"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Product Manager",
      company: "Baker Hughes",
      text: "Siddharth consistently delivers high-quality React components that are both performant and accessible. His attention to detail and collaborative approach make him a valuable team member.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Tech Lead",
      company: "Google",
      text: "Working with Siddharth on Flow Maker was excellent. His TDD approach and Angular Dart expertise helped us maintain code quality while delivering features rapidly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "UX Designer",
      company: "Epam Systems",
      text: "Siddharth has an exceptional ability to translate design concepts into pixel-perfect implementations. His understanding of both design and development makes collaboration seamless.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Enterprise Energy Management",
      description: "React-based dashboard for Baker Hughes energy management system with real-time monitoring and analytics.",
      technologies: ["React", "TypeScript", "Redux", "Material UI", "Chart.js"],
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
      features: [
        "Real-time data visualization",
        "Responsive design",
        "WCAG 2.1 AA compliance",
        "Automated testing coverage"
      ]
    },
    {
      id: 2,
      title: "Workflow Automation Platform",
      description: "Angular Dart application for Google's internal workflow automation with advanced state management.",
      technologies: ["Angular Dart", "JavaScript", "Scuba", "Bolt"],
      category: "Enterprise Tool",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
      features: [
        "Drag-and-drop workflow builder",
        "Advanced state management",
        "TDD implementation",
        "Cross-team collaboration"
      ]
    },
    {
      id: 3,
      title: "Mobile-First CRM",
      description: "Ionic 6 mobile application for customer relationship management with offline capabilities.",
      technologies: ["Angular", "Ionic", "TypeScript", "SCSS"],
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      link: "#",
      github: "#",
      features: [
        "Offline-first architecture",
        "Progressive Web App",
        "Push notifications",
        "Data synchronization"
      ]
    }
  ],

  achievements: [
    {
      id: 1,
      title: "WCAG 2.1 AA Compliance Expert",
      description: "Successfully implemented accessibility standards across all major projects",
      year: "2023",
      icon: "accessibility"
    },
    {
      id: 2,
      title: "Clean Code Champion",
      description: "Recognized for consistent implementation of SOLID principles and maintainable code",
      year: "2023",
      icon: "code"
    },
    {
      id: 3,
      title: "Cross-Platform Development",
      description: "Successfully delivered projects across React, Angular, and Ionic platforms",
      year: "2022",
      icon: "devices"
    },
    {
      id: 4,
      title: "Test-Driven Development",
      description: "Implemented TDD practices resulting in 95% code coverage",
      year: "2022",
      icon: "test"
    }
  ]
};

export const blogPosts = [
  {
    id: 1,
    title: "Building Accessible React Components",
    excerpt: "Best practices for creating WCAG-compliant React components that work for everyone.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Accessibility",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["React", "Accessibility", "WCAG", "Frontend"]
  },
  {
    id: 2,
    title: "Redux Toolkit: State Management Made Simple",
    excerpt: "How Redux Toolkit simplifies state management in modern React applications.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "State Management",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["Redux", "React", "State Management", "TypeScript"]
  },
  {
    id: 3,
    title: "Clean Code Principles in Frontend Development",
    excerpt: "Applying SOLID principles to write maintainable and scalable frontend code.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["Clean Code", "SOLID", "JavaScript", "Best Practices"]
  }
];

export const contactInfo = {
  email: "siddharth.garewal@example.com",
  phone: "+91 9876543210",
  location: "Hyderabad, India",
  timezone: "IST (UTC+5:30)",
  availability: "Available for new opportunities",
  socialLinks: {
    linkedin: "https://linkedin.com/in/siddharthgarewal",
    github: "https://github.com/siddharthgarewal",
    twitter: "https://twitter.com/siddharthgarewal",
    portfolio: "https://siddharthgarewal.dev"
  }
};