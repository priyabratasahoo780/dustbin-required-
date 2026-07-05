import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ResumeContext = createContext();

const INITIAL_STATE = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: '',
  },
  summary: '',
  skills: [], // Will be array of { category, items }
  education: [],
  experience: [],
  projects: [],
  certifications: [], // Will be array of { category, items }
  languages: [],
  achievements: [],
  figmaLinks: [],
  socialLinks: [],
  settings: {
    fontSize: 10, // Base font size in pixels
    sectionSpacing: 4, // Vertical spacing multiplier
    smartFit: true, // Auto-adjust based on content
    nameSize: 0, // Manual Name size override (0 = default)
    taglineSize: 0, // Manual Tagline size override
    sectionTitleSize: 0, // Manual Section Title size override
    bodySize: 0, // Manual Body Text size override
    contactSize: 0, // Manual Contact Info size override
    socialSize: 0, // Manual Social Links size override
    companySize: 0,
    roleSize: 0,
    durationSize: 0,
    institutionSize: 0,
    degreeSize: 0,
    yearSize: 0,
    gpaSize: 0,
    projTitleSize: 0,
    techStackSize: 0,
    skillCategorySize: 0,
    skillSize: 0,
    certTitleSize: 0,
    certIssuerSize: 0,
    achievementsSize: 0,
    langSize: 0,
    figmaSize: 0,
  },
  activeTemplate: 'Sujal',
  activeSection: 'personal',
  theme: 'light',
};

// Helper to get flattened list for simple templates
const getFlattened = (list) => {
  if (!Array.isArray(list)) return [];
  return list.reduce((acc, curr) => {
    if (!curr) return acc;
    if (typeof curr === 'string') return [...acc, curr];
    if (typeof curr === 'object') {
      // If it's a category object { category, items }
      if (curr.items && Array.isArray(curr.items)) {
        return [...acc, ...curr.items.map(item => 
          typeof item === 'object' ? (item.name || item.label || '') : item
        )];
      }
      // If it's a single skill object { name, ... }
      if (curr.name || curr.label) {
        return [...acc, curr.name || curr.label];
      }
    }
    return acc;
  }, []);
};

export const ResumeProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('resume_data');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('resume_data', JSON.stringify(data));
  }, [data]);

  const updatePersonalInfo = useCallback((info) => {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  }, []);

  const updateSummary = useCallback((summary) => {
    setData((prev) => ({ ...prev, summary }));
  }, []);

  const updateSettings = useCallback((settings) => {
    setData((prev) => ({ 
      ...prev, 
      settings: { ...prev.settings, ...settings } 
    }));
  }, []);

  const updateList = useCallback((key, list) => {
    setData((prev) => ({ ...prev, [key]: list }));
  }, []);

  const toggleTheme = useCallback(() => {
    setData((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  }, []);

  const setActiveTemplate = useCallback((template) => {
    setData((prev) => ({ ...prev, activeTemplate: template }));
  }, []);

  const setActiveSection = useCallback((section) => {
    setData((prev) => ({ ...prev, activeSection: section }));
  }, []);

  const resetData = useCallback(() => {
    setData(INITIAL_STATE);
  }, []);

  const fillRidhamData = useCallback(() => {
    setData({
      personalInfo: {
        fullName: 'RIDHAM PATEL',
        jobTitle: 'FULL STACK DEVELOPER',
        email: 'ridham.patel.cg@gmail.com',
        phone: '8128281326',
        location: 'Ahmedabad, Gujarat',
        github: 'github.com/ridhampatel',
        linkedin: 'linkedin.com/in/ridhampatel',
        portfolio: 'ridhampatel.me',
      },
      summary: [
        'Full-stack web development with React & Node.js',
        'MongoDB database design & optimization',
        'Authentication & security (JWT, role-based access)',
        'RESTful API development',
        'UI/UX design with Figma'
      ],
      skills: [
        { category: 'Languages & Frameworks', items: ['JavaScript (ES6+)', 'C++', 'React.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
        { category: 'Databases & Backend', items: ['MongoDB', 'Mongoose', 'REST APIs', 'Cloudinary', 'Node.js', 'Express.js'] },
        { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Postman', 'npm', 'Vercel', 'Netlify', 'Render', 'Figma', 'Hostinger'] },
        { category: 'UI/UX Design', items: ['Figma', 'Wireframing', 'Prototyping'] }
      ],
      education: [
        { college: 'Rai University, Ahmedabad', degree: 'Bachelor of Technology', year: '2024 — 2028', cgpa: '2024 - 2028' },
        { college: 'Shivam Vidhyalaya, Ahmedabad', degree: 'Higher Secondary Education', year: '2022 — 2024', cgpa: '2022 - 2024' },
        { college: 'Sankalp International School, Ahmedabad', degree: 'School Secondary Education', year: '2020 — 2022', cgpa: '2020 - 2022' }
      ],
      experience: [
        {
          role: 'JustForTeachers',
          company: 'Overview: Designed and built the JustForTeachers website to share teacher-focused resources, educational content, and community features.',
          duration: 'Freelance Client Project',
          description: 'Technologies: Next.js, React.js, Node.js, Express.js, MongoDB, Supabase, Tailwind CSS, Cloudinary'
        }
      ],
      projects: [
        {
          title: 'Ironcore Gym',
          tech: 'MongoDB, Express.js, React.js, Node.js, JWT, Postman API',
          description: 'Gym management platform with BMI calculator and AI diet plans.',
          links: [{ label: 'Live', url: '#' }, { label: 'Demo', url: '#' }, { label: 'Github', url: '#' }]
        },
        {
          title: 'React Data Explorer',
          tech: 'React.js, Node.js, Express.js',
          description: 'React-based data exploration platform with APIs and dynamic filtering.',
          links: [{ label: 'Live', url: '#' }, { label: 'Demo', url: '#' }, { label: 'Github', url: '#' }]
        },
        {
          title: 'Task Bridge',
          tech: 'Open Source',
          description: 'Virtual whiteboard using React and Fabric.js with state management.',
          links: [{ label: 'Github', url: '#' }, { label: 'PRs', url: '#' }]
        }
      ],
      certifications: [
        { category: 'Main', items: ['Frontend Developer', 'Basics of Azure', 'Amazon DocDB', 'Load Balancer', 'Container Security', 'GitHub Copilot', 'Azure Fundamentals', 'Problem Solving', 'JavaScript', 'React', 'Node.js', 'Rest API', 'SQL', 'CSS', 'AI-ML Internship', 'Gen-AI Internship'] }
      ],
      achievements: [
        'Indradhanu Global Finalist: Top 25 Global Finalist among 1,100+ teams. PCCOE, Pune | Jan 2026',
        'Top 4 Finisher - OpenPools Hackathon: Doppelganger 30-Hour Hackathon. Developed a real-time AI fitness ecosystem.',
        'Hackatron Finalist: INFOTSAV\'25 | ABV-IIITM | Oct 2025'
      ],
      figmaLinks: [
        { title: 'GoDest' }, { title: 'Somoko Industries' }, { title: 'Youtube Clone' }, { title: 'Hourly Hotel' }, { title: 'MultiDay Tours' },
        { title: 'DocuMorph' }, { title: 'Insta Clone' }, { title: 'Gov Guidelines' }, { title: 'Amazon' }, { title: 'Flipkart' }, { title: 'Netflix' }, { title: 'Coding Gita' }
      ],
      socialLinks: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/ridhampatel' },
        { label: 'Github', url: 'https://github.com/ridhampatel' },
        { label: 'Youtube', url: 'https://youtube.com/@ridhampatel' },
        { label: 'Portfolio', url: 'https://ridhampatel.me' }
      ]
    });
    setActiveTemplate('Ridham');
  }, []);

  const fillSujalData = useCallback(() => {
    setData({
      ...INITIAL_STATE,
      personalInfo: {
        fullName: 'VASARA SUJAL',
        jobTitle: 'Full Stack Developer',
        email: 'vasarasujal.cg@gmail.com',
        phone: '+91 6354937917',
        location: 'Ahmedabad, Gujarat',
        linkedin: 'linkedin.com/in/sujal',
        github: 'github.com/sujal',
        portfolio: 'sujalvasara.me',
      },
      socialLinks: [
        { label: 'GitHub Profile', url: 'https://github.com/' },
        { label: 'Linkedin Profile', url: 'https://linkedin.com/' },
        { label: 'Leetcode Profile', url: 'https://leetcode.com/' },
        { label: 'YouTube Profile', url: 'https://youtube.com/' }
      ],
      summary: 'Passionate developer focusing on building scalable web solutions and interactive user experiences.',
      skills: [
        { category: 'Frontend Development', items: ['HTML5', 'CSS3', 'React.js', 'next.js', 'Responsive Web Design', 'UI/UX Fundamentals'] },
        { category: 'Backend Development', items: ['Node.js', 'RESTful APIs', 'Express.js', 'Authentication & Authorization'] },
        { category: 'Programming Languages', items: ['JavaScript', 'c', 'c++', 'java'] },
        { category: 'Database & Data Management', items: ['MongoDB', 'MySQL', 'PostgreSQL (Basic)'] },
        { category: 'Cloud & DevOps Fundamentals', items: ['Cloud Computing Concepts', 'Virtual Machines'] },
        { category: 'Operating Systems Fundamentals', items: ['Process Scheduling', 'Multithreading Basics'] },
        { category: 'Computer Science Fundamentals', items: ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms Basics', 'DBMS Concepts', 'Operating Systems'] },
        { category: 'Tools & Deployment', items: ['Git', 'GitHub', 'Postman', 'VSCode', 'Vercel', 'Netlify', 'Render'] }
      ],
      education: [
        {
          college: 'Rai University, Ahmedabad',
          degree: 'Bachelor of technology',
          year: '2024 – 2028',
        },
      ],
      projects: [
        {
          title: 'King Hub – Online Food Delivery Platform',
          tech: 'React, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs',
          duration: 'november - february / 2024',
          description: 'Built full-stack architecture by integrating React-based UI with Node.js APIs and MongoDB for seamless data flow.',
          links: [
            { label: 'GitHub Repo', url: '#' },
            { label: 'GitHub Pull Requests', url: '#' },
            { label: 'Postman Documentation', url: '#' },
            { label: 'Backend Deployment', url: '#' },
            { label: 'Frontend Deployment', url: '#' },
            { label: 'Demo Video', url: '#' }
          ]
        },
        {
          title: 'Smart Emergency Blood Network',
          tech: 'Hack the winter - GEHU (Bhimtal) - 25/12/2025',
          description: 'Designed hospital-side emergency blood request and discovery workflows based on urgency and location. Implemented secure, role-based REST APIs enabling hospitals to raise, track, and manage emergency blood requests in real time.',
          links: [
            { label: 'GitHub Repo Link', url: '#' },
            { label: 'Demo Video', url: '#' },
            { label: 'Frontend Deployment', url: '#' },
            { label: 'Backend Deployment', url: '#' }
          ]
        },
        {
          title: 'Rental Managment',
          tech: 'odoo x gandhinagar final round project - 11/08/2025',
          description: 'Rental Management Web App built with Node.js, Express, MongoDB, and React. Implemented Stripe-based payment processing and email OTP verification using Nodemailer to enhance transaction security. Optimized rental operations with a scalable backend and a responsive, user-friendly interface.',
          links: [
            { label: 'GitHub Repo Link', url: '#' }
          ]
        }
      ],
      certifications: [
        { category: 'Core Programming & Development', items: ['Problem Solving', 'JavaScript', 'Node.js', 'Cpp', 'React', 'SQL', 'RESTful API', 'CSS'] },
        { category: 'Cloud, DevOps & Security Certifications', items: ['GitHub Copilot Fundamentals', 'Container Security', 'Gateway Load Balancer', 'Amazon DocumentDB with MongoDB', 'Basic of Azure Services'] }
      ],
      figmaLinks: [
        { title: 'Instagram clone', url: '#' },
        { title: 'Image Slider', url: '#' },
        { title: 'Coding Gita Website clone', url: '#' },
        { title: 'Rental Managmet', url: '#' },
        { title: 'kingHub Design', url: '#' },
        { title: 'Wireframe', url: '#' },
        { title: 'Netflix Home Page', url: '#' },
        { title: 'Govt. of India (HomePage)', url: '#' }
      ],
      achievements: [
        'Achieved 9.81 CGPA in First Year of Bachelor of Technology, reflecting strong academic excellence.',
        'Selected for Final Round of Odoo x Gandhinagar Hackathon, demonstrating technical and problem-solving skills.',
        'Contributed in 5+ hackathons, gaining hands-on experience in rapid full-stack development, teamwork, and real-world problem solving.'
      ],
      activeTemplate: 'Sujal',
      theme: 'light',
    });
  }, []);

  const fillPriyData = useCallback(() => {
    setData({
      personalInfo: {
        fullName: 'Priy Mavani',
        jobTitle: 'Full Stack Developer',
        email: 'priyamavani02@gmail.com',
        phone: '1234567890',
        location: 'Gujarat, India',
        github: 'github.com/priyamavani',
        linkedin: 'linkedin.com/in/priyamavani',
        portfolio: 'priyamavani.me',
      },
      summary: '',
      socialLinks: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/priyamavani' },
        { label: 'Github', url: 'https://github.com/priyamavani' },
        { label: 'Leetcode', url: 'https://leetcode.com/priyamavani' },
        { label: 'Portfolio', url: 'https://priyamavani.me' },
        { label: 'YouTube', url: 'https://youtube.com/@priyamavani' },
        { label: 'Email', url: 'mailto:priyamavani02@gmail.com' }
      ],
      skills: [
        { category: 'Languages', items: ['C++', 'JavaScript (ES6+)', 'Java'] },
        { category: 'Frontend Technologies', items: ['React.js', 'Material UI', 'Chakra UI', 'HTML5', 'CSS3'] },
        { category: 'Backend & Databases', items: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'] },
        { category: 'Version Control', items: ['Git and GitHub'] },
        { category: 'Tools & Platforms', items: ['Postman', 'Vercel', 'Render', 'Netlify', 'Figma'] },
        { category: 'Other Skills', items: ['UI/UX Design', 'Problem Solving', 'Team Collaboration'] }
      ],
      education: [
        { college: 'Rai University', degree: 'B Tech Computer Science', year: 'CGPA: 9.63' },
        { college: 'The School of Science', degree: 'Completed Higher Secondary', year: '12th Science | percentage: 80%' }
      ],
      experience: [],
      projects: [
        {
          title: 'Task Bridge',
          tech: 'React.js, Node.js, Express.js, MongoDB',
          description: [
            'Developed a centralized project management platform using the MERN stack, unifying a React frontend with a Node.js backend.',
            'Designed a responsive Material UI interface featuring interactive task boards for seamless status tracking.',
            'Implemented a scalable document management system using Cloudinary for secure asset uploads and retrieval.',
            'Engineered secure RESTful APIs with JWT and RBAC to enforce strict user permissions and data privacy.'
          ].join('\n'),
          links: [
            { label: 'Link', url: '#' },
            { label: 'Github', url: '#' },
            { label: 'API Documentation', url: '#' },
            { label: 'Demo Video', url: '#' }
          ]
        },
        {
          title: 'Stock Master',
          tech: 'React.js, Node.js, Express.js, MongoDB, Tailwind CSS',
          description: [
            'Project Type: Hackathon Project',
            'Developed a multi-location Inventory Management System to digitize supply chain operations and enable real-time stock tracking.',
            'Engineered a robust Inventory Service using atomic database operations to ensure data consistency during complex stock transfers.',
            'Architected secure RESTful APIs with custom rate-limiting middleware to optimize performance and prevent system abuse.',
            'Designed a granular Audit Logging Service to track critical system changes, ensuring complete operational accountability.'
          ].join('\n'),
          links: [
            { label: 'Link', url: '#' },
            { label: 'Github', url: '#' },
            { label: 'API Documentation', url: '#' },
            { label: 'Demo Video', url: '#' }
          ]
        },
        {
          title: 'Poll Vibe',
          tech: 'React.js, Node.js, Express.js, MongoDB',
          description: [
            'Project Type: Open Source Contribution',
            'Contributed to the open-source poll_vibe repository by engineering the backend infrastructure for "Image Polls," enabling users to seamlessly upload and attach rich media to voting options.',
            'Integrated Cloudinary CDN to handle scalable image storage and delivery, optimizing application performance by offloading static assets from the main server.',
            'Developed secure file upload API endpoints with middleware validation to enforce strict file type and size limits, preventing malicious uploads and ensuring system stability.'
          ].join('\n'),
          links: [
            { label: 'Github', url: '#' },
            { label: 'Demo Video', url: '#' }
          ]
        },
        {
          title: 'LinkedIn Text Formatter',
          tech: 'Vanilla JavaScript, HTML5, CSS3, Chrome Extensions API (Manifest V3)',
          description: [
            'Project Type: Chrome Extension',
            'Built a Chrome Extension using a custom JavaScript algorithm to convert standard text into styled Unicode characters.',
            'Optimized performance by utilizing Vanilla JS and Manifest V3, eliminating the need for heavy frameworks.',
            'Integrated the Clipboard API and DOM manipulation to enable instant text formatting and export.'
          ].join('\n'),
          links: [
            { label: 'Github', url: '#' },
            { label: 'Demo Video', url: '#' }
          ]
        }
      ],
      certifications: [
        { category: 'Main', items: [
          { name: 'JavaScript (Basic)', url: 'https://www.hackerrank.com/certificates/eb98471b6973' },
          { name: 'JavaScript (Intermediate)', url: 'https://www.hackerrank.com/certificates/693eb706df8b' },
          { name: 'CSS (Basic)', url: 'https://www.hackerrank.com/certificates/0919424c5391' },
          { name: 'React (Basic)', url: 'https://www.hackerrank.com/certificates/1660d5b12852' },
          { name: 'Rest Api (Intermediate)', url: 'https://www.hackerrank.com/certificates/05ced1040660' },
          { name: 'Node (Basic)', url: 'https://www.hackerrank.com/certificates/8051722ec67f' }
        ] }
      ],
      achievements: [
        'Odoo x SPIT Mumbai (Shortlisted) - Stock Master',
        'Odoo x Gujarat Vidyapith : 24 hour Offline - Farm Trust',
        'Rai University State Level Hackthon : 8 hour Offline - food share',
        'Nexothon GCET : 24 hour Offline - Design to Code',
        'Odoo x NMIT Hackathon - Synergy Sphere'
      ],
      figmaLinks: []
    });
    setActiveTemplate('Priy');
  }, []);

  const fillKalpanData = useCallback(() => {
    setData({
      ...INITIAL_STATE,
      personalInfo: {
        fullName: 'KALPAN KANERIYA',
        jobTitle: 'Full Stack Devloper',
        email: 'kalpankaneriya@gmail.com',
        phone: '+91 6352169258',
        location: 'Rajkot, Gujarat',
      },
      summary: 'Full-stack MERN developer with a passion for building dynamic, scalable, and user-friendly web applications. Proficient in React, Node.js, Express.js, and MongoDB, with a strong foundation in both front-end and back-end development. Skilled in optimizing workflows and integrating modern technologies, including AI-powered tools, to enhance development efficiency.',
      skills: [
        { category: 'Frontend', items: ['HTML5', 'TAILWIND CSS', 'CSS3', 'NODE', 'JAVASCRIPT', 'REACT'] },
        { category: 'Backend', items: ['Version Control- Git, GitHub', 'EXPRESS', 'MongoDB'] },
        { category: 'Other', items: ['MUI', 'RESTful APIs', 'JWT', 'FIGMA', 'C++'] }
      ],
      education: [
        {
          college: 'Rai University',
          degree: 'B.Tech in Computer Science and Engineering',
          year: '2024-2028',
          cgpa: '9.95',
        },
      ],
      projects: [
        {
          title: 'JobFusion - Job Portal & Resume Builder (CURRETNLY WORKING)',
          tech: 'React, Node.js, Express, MongoDB, Tailwind CSS, Material UI',
          description: 'JobFusion is a comprehensive job portal and resume builder designed to help users search and apply for live job listings through the Adzuna API.',
          links: [
            { label: 'GitHub', url: 'https://github.com/Kalpan2007/jobfusion' },
            { label: 'Figma Link', url: 'https://figma.com' },
            { label: 'Deploy Link', url: 'https://jobfusion.com' },
            { label: 'Closed Pull Requests', url: 'https://github.com' }
          ]
        },
        {
          title: 'React API Project (React + 4 APIs)',
          tech: 'React.js, REST APIs',
          description: 'The React API Project is a web application that integrates four distinct APIs—Cocktails API, Meals API, Bank API, and Harry Potter API.',
          links: [
            { label: 'Github Repository', url: 'https://github.com/Kalpan2007/React-Api-Project' },
            { label: 'Deployment Link', url: 'https://react-api-project.vercel.app' }
          ]
        }
      ],
      socialLinks: [
        { label: 'GitHub', url: 'https://github.com/Kalpan2007' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/3kz' }
      ]
    });
    setActiveTemplate('Kalpan');
  }, []);

  const fillJagjeetData = useCallback(() => {
    setData({
      ...INITIAL_STATE,
      personalInfo: {
        fullName: 'JAGJEET DANGAR',
        jobTitle: 'Full Stack Developer (MERN)',
        email: 'jagjeet.dangar.cg@gmail.com',
        phone: '+91 9426921514',
        portfolio: 'My Portfolio',
      },
      summary: 'Full Stack Developer (MERN) with hands-on experience building scalable web applications using React, Node.js, Express, and MongoDB. Proven experience in authentication, REST APIs, role-based systems, and deployment. Strong problem-solving skills with hackathon and real-world project exposure.',
      socialLinks: [
        { label: 'GitHub Profile', url: '#' },
        { label: 'LinkedIn Profile', url: '#' },
        { label: 'Leetcode Profile', url: '#' }
      ],
      education: [
        {
          college: 'Rai University, Ahmedabad',
          degree: 'Bachelor of technology',
          year: '2024 - 2028',
          cgpa: '9.30',
        },
        {
          college: 'Alpha Vidhya Sankul, Junagadh',
          degree: 'Higher Secondary Education',
          year: '2022 - 2024',
        },
        {
          college: 'Alpha Vidhya Sankul, Junagadh',
          degree: 'School Secondary Education',
          year: '2020 - 2022',
        }
      ],
      skills: [
        { category: 'Languages', items: ['JavaScript (ES6+)', 'C', 'C++', 'Java'] },
        { category: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
        { category: 'Databases', items: ['MongoDB', 'SQL'] },
        { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'GitHub Copilot'] },
        { category: 'Cloud & DevOps', items: ['Azure Basics', 'Gateway Load Balancer'] },
        { category: 'Concepts', items: ['Authentication', 'RBAC', 'CRUD', 'MVC Architecture'] }
      ],
      certifications: [
        { category: 'Certificates', items: [
          'Problem Solving (Basic)', 'Node.js', 'React', 'CSS', 'GitHub Copilot Fundamentals',
          'Gateway Load Balancer', 'Basic of Azure Services', 'Problem Solving', 'JavaScript', 'JavaScript (Basic)'
        ] }
      ],
      figmaLinks: [
        { title: 'Sweet Delight', url: '#' },
        { title: 'Codinggita Design', url: '#' },
        { title: 'Eduztrik', url: '#' },
        { title: 'FlexMate', url: '#' }
      ],
      experience: [
        {
          company: 'Sweet Delight - A Bakery Website',
          role: 'Full Stack Developer',
          duration: 'September 2025',
          description: [
            'Sweet Delight is a real world modern Bakery that connects users with Bakery for quick and easy online ordering.',
            'Technologies: React, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs.',
            'Role: Developed frontend and backend, integrated database and APIs.',
            'Deployed Link: [Link]'
          ].join('\n')
        }
      ],
      projects: [
        {
          title: 'FlexMate',
          tech: 'January 2025 - March 2025',
          description: [
            'A self-initiated MERN stack platform connecting freelancers and companies, featuring secure authentication with firebase, job listings, applicant tracking, and portfolio showcasing with a scalable, user-friendly design.',
            'Github : FlexMate',
            'Postman Documentation : Documentation',
            'Live Demo : FlexMate  Demo Video : Video'
          ].join('\n')
        },
        {
          title: 'FundVista Github Deployed',
          tech: 'Sept 2025 - Oct 2025',
          description: 'Mini app built with Nextjs and Tailwind CSS for users to explore store market.',
          links: [{ label: 'GitHub', url: 'https://github.com' }]
        },
        {
          title: 'Expense Manager System - Odoo Hackathon Project',
          tech: 'MERN',
          description: [
            'An Expense Management System built during the Odoo Hackathon for role-based expense tracking and approvals.',
            'Tech Stack: MERN',
            'GitHub: Expense Manager System',
            'Deployed Link : Expense Management System',
            'Demo Video : Video'
          ].join('\n'),
          links: [
            { label: 'GitHub', url: 'https://github.com' },
            { label: 'Deployed Link', url: 'https://vercel.app' },
            { label: 'Demo Video', url: 'https://youtube.com' }
          ]
        },
        {
          title: 'HR Manager System - Odoo Hackathon Project',
          tech: 'Nov 2025',
          description: [
             'An HR Management System for handling employee records, attendance, and role-based access.',
             'Tech Stack: MERN',
             'GitHub: HR Manager System',
             'Demo Video : Video',
             'Offline Participation Certificate : Certificate'
          ].join('\n'),
          links: [
            { label: 'GitHub', url: 'https://github.com' },
            { label: 'Demo Video', url: 'https://youtube.com' }
          ]
        },
        {
          title: 'Stock Manager System - Odoo Hackathon Project',
          tech: 'Sept 2025',
          description: [
             'An Stock Management System for handling stock records, management, and role-based access.',
             'Tech Stack: MERN',
             'GitHub: Stock Manager System',
             'Demo Video : Video'
          ].join('\n'),
          links: [
            { label: 'GitHub', url: 'https://github.com' },
            { label: 'Demo Video', url: 'https://youtube.com' }
          ]
        }
      ]
    });
    setActiveTemplate('Jagjeet');
  }, []);

  const fillKrutagyaData = useCallback(() => {
    setData({
      ...INITIAL_STATE,
      personalInfo: {
        fullName: 'KRUTAGYA KANERIA',
        jobTitle: 'Backend Developer',
        email: 'krutagyakaneria@outlook.com',
        phone: '+91 9023975638',
        address: 'Ahmedabad, Gujarat',
        linkedin: 'https://www.linkedin.com/in/krutagya-kaneria/',
        github: 'https://github.com/krutagyakaneria'
      },
      skills: [
        { category: 'Programming Languages', items: ['Python', 'C/C++', 'JavaScript', 'Typescript', 'SQL(Postgres)', 'PHP', 'HTML/CSS'] },
        { category: 'Frameworks & Libraries', items: ['Next.js', 'React', 'Redux', 'Node.js', 'Express', 'Socket.io', 'Appwrite', 'Tailwind CSS', 'Framer Motion'] },
        { category: 'Cloud & DevOps', items: ['Google Cloud', 'Vercel'] },
        { category: 'Developer Tools', items: ['Git', 'GitHub', 'Google Cloud', 'Postman', 'VS Code'] },
        { category: 'Database Management', items: ['PostgreSQL', 'MongoDB', 'Appwrite'] }
      ],
      education: [
        {
          college: 'Rai School of Engineering',
          degree: 'Bachelor of Technology in Computer Science',
          duration: 'August 2024 — June 2028',
          location: 'Gujarat, India',
          cgpa: '9.65/10'
        }
      ],
      experience: [
        {
          role: 'Backend Developer — Hackathon Finalist',
          company: 'Gujarat Vidyapeeth Hackathon',
          duration: 'May 23 - 2025',
          location: 'Gujarat, India',
          description: [
            'Contributed as a backend developer in a national-level hackathon; project focused on connecting farmers with consumers via a full-stack marketplace.',
            'Designed and implemented REST APIs, JWT-based authentication, and MongoDB data models for high reusability.',
            'Achieved finalist position among 2000+ participating teams.'
          ].join('\n')
        },
        {
          role: 'Visitor — Industry Interaction',
          company: 'Odoo India Headquarters',
          duration: 'April 11 - 2025',
          location: 'Gujarat, India',
          description: [
            'Participated in an educational visit to Odoo\'s India HQ to understand ERP systems and large-scale business application workflows.',
            'Engaged with engineering teams to explore real-world use of Python and PostgreSQL in enterprise solutions.',
            'Gained insights into Agile methodologies, CI/CD pipelines, and microservice architecture in a commercial ERP setting.',
            'Learned about Odoo\'s open-source contribution process and how feature requests are handled from client to deployment.'
          ].join('\n')
        }
      ],
      projects: [
        {
          title: 'HealthSync — Smart Hospital Management Platform',
          tech: 'MERN Stack',
          description: [
            'Developed a full-stack healthcare web app enabling patients to search hospitals, compare services, and book appointments securely.',
            'Implemented role-based JWT authentication for Patients, Doctors, and Hospital Admins.',
            'Integrated Stripe for secure file creation fee payments and added a chatbot for medicine-related queries using AI.',
            'Designed a MongoDB schema to manage doctors, hospitals, facilities, and real-time bed availability.'
          ].join('\n')
        },
        {
          title: 'AgriAuthentic — Farmer-to-Consumer Marketplace with Price Forecasting',
          tech: 'Full Stack',
          description: [
            'Built a platform connecting farmers and consumers, allowing verified farmers to post crops and track orders.',
            'Designed a secure backend using JWT for role-based login (Farmer/Consumer).',
            'Created a custom market price prediction API to guide farmers on optimal crop pricing and timing.',
            'Implemented product reviews visible only after a successful purchase, enhancing trust and transparency.'
          ].join('\n')
        },
        {
          title: 'YouTube Clone — Video Streaming Platform',
          tech: 'React & YouTube API',
          description: [
            'Engineered a responsive video streaming platform using YouTube Data API v3.',
            'Implemented category-based video browsing, real-time search, and detailed metadata rendering.'
          ].join('\n')
        }
      ],
      certifications: [
        { title: 'CSS Fundamentals and Styling Techniques', issuer: 'HackerRank', date: 'May 2025' },
        { title: 'Getting Started with Amazon DocumentDB (with MongoDB compatibility)', issuer: 'Simplilearn', date: 'May 2025' },
        { title: 'Microsoft Azure AI Essentials Professional Certificate', issuer: 'Microsoft & LinkedIn Learning', date: 'May 2025' },
        { title: 'Web Development with Node.js and MongoDB', issuer: 'Infosys Springboard', date: 'May 2025' },
        { title: 'Career Essentials in GitHub — Professional Certificate', issuer: 'GitHub & LinkedIn Learning', date: 'Jan 2025' }
      ]
    });
    setActiveTemplate('Krutagya');
  }, []);

  const fillDevData = useCallback(() => {
    setData({
      personalInfo: {
        fullName: 'DEV PATEL',
        jobTitle: 'Full Stack Developer',
        email: 'dev.patel.codinggita@gmail.com',
        phone: '+91 1234567890',
        location: 'Ahmedabad, Gujarat, India',
        portfolio: 'dev-patel.netlify.app',
        linkedin: 'linkedin.com/in/dev-patel2139',
        github: 'github.com/DevPatel-21',
        summary: 'Second-Year Undergraduate - Focus: Full-Stack Development, AI, Data Analytics, System Design'
      },
      education: [
        {
          college: 'CodingGita, Rai University',
          degree: 'Bachelor of Technology in Computer Science Engineering',
          year: 'Aug 2024 - Present',
          location: 'Ahmedabad, Gujarat, India',
          summary: 'Focus: Full-Stack Development, AI, Data Analytics, System Design'
        }
      ],
      skills: [
        { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C', 'SQL', 'HTML', 'CSS'] },
        { category: 'Frontend', items: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Material-UI', 'ShadCN', 'Responsive Design', 'Web Accessibility'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'REST API', 'Authentication (Clerk, Firebase Auth)', 'WebRTC', 'WebSockets'] },
        { category: 'Databases', items: ['MongoDB', 'MongoDB Atlas', 'Firebase', 'MySQL', 'Supabase'] },
        { category: 'Tools & Platforms', items: ['Git/GitHub', 'Figma', 'Postman', 'Vercel', 'Netlify', 'Render', 'AWS', 'Docker'] },
        { category: 'Core Competencies', items: ['Full-Stack Development', 'Real-Time Systems', 'Data Analytics', 'System Architecture', 'Agile Development'] }
      ],
      experience: [
        {
          company: 'SAVIO ERP Softwares Pvt. Ltd.',
          role: 'Full Stack Developer',
          duration: 'Dec 2025 - Present',
          location: 'Ahmedabad, Gujarat, India',
          description: [
            'Architecting and developing scalable full-stack ERP solutions using React.js, Next.js, and Node.js serving enterprise clients',
            'Implementing real-time data synchronization features and optimizing database queries, improving system performance by 30%',
            'Building RESTful APIs and microservices architecture with Express.js, enhancing system modularity and reducing latency by 25%',
            'Collaborating with cross-functional teams using Agile methodologies to deliver software infrastructure improvements'
          ].join('\n')
        },
        {
          company: 'CarinaFashions',
          role: 'Software Development Intern',
          duration: 'Dec 2024 - Feb 2025',
          location: 'Remote, India',
          description: [
            'Developed responsive e-commerce web applications using React.js, Tailwind CSS, and modern frontend frameworks',
            'Integrated third-party APIs and implemented backend services with Node.js to support seamless e-commerce functionality',
            'Participated in code reviews and collaborated with senior developers following industry best practices'
          ].join('\n')
        }
      ],
      projects: [
        {
          title: 'Invoxa_ERP - Business Management & Invoicing System',
          tech: 'MERN Stack',
          description: [
            'Designed and developed a PWA-enabled ERP system for managing invoicing, inventory, users, and role-based access for small to mid-scale businesses',
            'Built a scalable full-stack architecture using React.js, Node.js, Express.js, and MongoDB ensuring modularity and maintainability',
            'Optimized APIs and database queries to reduce operational latency and improve overall system responsiveness'
          ].join('\n'),
          link: 'github.com/DevPatel-21/Invoxa_ERP'
        },
        {
          title: 'RoamMemoirs - Individual Travel Journal',
          tech: 'MERN Stack',
          description: [
            'Built a MERN stack travel journal platform allowing users to securely create, store, and share travel experiences, improving content organization efficiency by 40%',
            'Optimized MongoDB schemas and REST APIs within the MERN architecture, achieving 25% faster data retrieval and smoother overall application performance'
          ].join('\n'),
          link: 'github.com/DevPatel-21/RoamMemoirs'
        },
        {
          title: 'College Predictor - Smart College Recommendation System',
          tech: 'Next.js, Tailwind',
          description: [
            'Built a data-driven web platform using Next.js and Tailwind CSS predicting eligible colleges based on JEE Mains, JEE Advanced, NEET, MCET, and KCET ranks, improving course shortlisting efficiency by 50%',
            'Analyzed past-year admission trends to generate accurate predictions and personalized scholarship recommendations, increasing decision-making accuracy by 35%'
          ].join('\n'),
          link: 'github.com/DevPatel-21/CollegePredictor'
        }
      ],
      certifications: [
        'State-Level Recognition: Project officially recognized at state level and appreciated by the Honorable Chief Minister of Gujarat',
        'Deloitte Australia - Technology Job Simulation - Completed hands-on simulation focused on technology consulting',
        'Academic Excellence: Graduated from Jawahar Navodaya Vidyalaya (JNV), premier institution for academically talented students'
      ],
      languages: ['English', 'Hindi', 'Gujarati'],
      activeTemplate: 'Dev',
      settings: { fontSize: 10, sectionSpacing: 1, smartFit: true }
    });
  }, []);

  const fillDemoData = useCallback(() => {
    setData({
      ...INITIAL_STATE,
      personalInfo: {
        fullName: 'ARJUN DIVRANIYA',
        jobTitle: 'Aspiring Full Stack Developer',
        email: 'arjundivraniya8@gmail.com',
        phone: '+91 1234567890',
        location: 'Rajkot, Gujarat',
        linkedin: 'linkedin.com/in/arjun',
        github: 'github.com/arjun',
        portfolio: 'arjun.dev',
      },
      summary: 'Passionate Full Stack Developer with experience in MERN stack and motion design. Focused on building scalable and user-friendly web applications.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      education: [
        {
          college: 'Rai University',
          degree: 'Bachelor of Technology (B.Tech)',
          year: 'Ongoing',
          cgpa: '9.74',
        },
      ],
      experience: [
        {
          company: 'Tech Solutions',
          role: 'Full Stack Intern',
          duration: 'Dec 2024 - Feb 2025',
          description: 'Developed responsive web components and integrated REST APIs.',
        },
      ],
      projects: [
        {
          title: 'AI Mirror Chat Bot',
          tech: 'React, Node.js, Express, MongoDB',
          description: 'A responsive AI-powered chatbot with real-time natural language interaction.',
          link: 'github.com/arjun/ai-mirror',
        },
      ],
      certifications: ['Azure Fundamentals', 'React.js & Hooks', 'Modern UI/UX Design'],
      languages: ['English', 'Hindi', 'Gujarati'],
      activeTemplate: 'Arjun',
      theme: 'light',
    });
  }, []);

  return (
    <ResumeContext.Provider
      value={{
        ...data,
        updatePersonalInfo,
        updateSummary,
        updateSettings,
        updateList,
        toggleTheme,
        setActiveTemplate,
        setActiveSection,
        resetData,
        fillDemoData,
        fillSujalData,
        fillRidhamData,
        fillPriyData,
        fillKalpanData,
        fillJagjeetData,
        fillKrutagyaData,
        fillDevData,
        getFlattened,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
