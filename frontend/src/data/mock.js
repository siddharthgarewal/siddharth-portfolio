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
      { name: "ReactJS", level: 90, category: "framework" },
      { name: "Angular", level: 85, category: "framework" },
      { name: "TypeScript", level: 90, category: "language" },
      { name: "JavaScript", level: 95, category: "language" },
      { name: "HTML5", level: 95, category: "markup" },
      { name: "CSS3/SCSS", level: 90, category: "styling" },
      { name: "Material UI", level: 85, category: "ui" },
      { name: "Redux Toolkit", level: 80, category: "state" },
      { name: "Ionic", level: 75, category: "mobile" }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Jira", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Jest", level: 85 },
      { name: "React Testing Library", level: 80 },
      { name: "Webpack", level: 75 },
      { name: "OpenSearch", level: 70 }
    ]
  },

  experience: [
    {
      id: 1,
      company: "Epam Systems",
      position: "Software Engineer",
      duration: "June 2021 - Present",
      location: "Hyderabad, India",
      projects: [
        {
          name: "Leucipa - Baker Hughes",
          duration: "June 2023 – Present",
          description: "Developed modular React components for energy sector applications, ensuring WCAG compliance and scalability.",
          technologies: ["ReactJS", "Redux Toolkit", "TypeScript", "HTML5", "SCSS", "Material UI"],
          achievements: [
            "Followed Clean Code and SOLID principles for maintainable components",
            "Ensured WCAG-compliant accessibility standards",
            "Developed comprehensive unit and integration tests",
            "Collaborated with designers to translate Figma designs into responsive UI"
          ]
        },
        {
          name: "Flow Maker - Google",
          duration: "July 2022 – May 2023",
          description: "Built workflow automation tools using Angular Dart, implementing TDD practices for high-quality code delivery.",
          technologies: ["Angular Dart", "JavaScript", "Scuba", "Bolt"],
          achievements: [
            "Implemented Test-Driven Development (TDD) using Jasmine",
            "Refactored Angular Dart components for better state management",
            "Collaborated with cross-functional teams in Agile environment",
            "Optimized application performance and user experience"
          ]
        },
        {
          name: "LoopIt – Proactive Technologies",
          duration: "June 2021 – June 2022",
          description: "Created pixel-perfect mobile-first applications using Angular and Ionic frameworks.",
          technologies: ["Angular 10", "TypeScript", "Ionic 6", "HTML5", "SCSS", "Angular Material"],
          achievements: [
            "Developed fully responsive UI components",
            "Optimized Angular 10 application performance",
            "Maintained high code quality through reviews and testing",
            "Delivered pixel-perfect implementations from designs"
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