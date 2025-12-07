import {
  FileCode,
  Palette,
  Code2,
  Layout,
  Briefcase,
  Globe,
  Server,
  Terminal,
  Database,
  HardDrive,
  Box,
  Share2,
  Command,
  Layers,
} from "lucide-react";
import productStoreImg from "../assets/icons/Product-store.png";

export const PERSONAL_INFO = {
  name: "Ali Haider",
  logo: "AH",

  roles: [
    "Full Stack Developer",
    "React & Node.js Developer",
    "Tech Enthusiast",
  ],

  title: "Full Stack Developer (MERN Stack)",

  bio: "I build real-world web applications using React, Node.js, and MongoDB—focusing on clean architecture, performance, and user-friendly interfaces.",

  about:
    "I’m a Full Stack Developer with a strong focus on the MERN stack, where I enjoy turning ideas into clean, functional, and user-friendly web applications. I work across both frontend and backend—crafting responsive interfaces in React and building secure, scalable APIs using Node.js, Express, and MongoDB. I have completed my BCA and have developed multiple full-stack projects that helped me understand real development practices like state management, authentication, database modeling, routing, and deployment. My goal is to build products that are not only technically solid, but also meaningful and enjoyable for users.",

  email: "alihaiderbgp@gmail.com",
  location: "Bihar, India",

  socials: {
    github: "https://github.com/md-alihaider",
    linkedin: "https://www.linkedin.com/in/md-ali-haider/",
    instagram: "https://www.instagram.com/alihaider_7056",
  },
};



export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS = [
  // Frontend
  {
    name: "HTML",
    category: "Frontend",
    percent: 90,
    icon: <FileCode className="w-6 h-6" />,
  },
  {
    name: "CSS",
    category: "Frontend",
    percent: 85,
    icon: <Palette className="w-6 h-6" />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    percent: 80,
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    name: "React",
    category: "Frontend",
    percent: 80,
    icon: <Layout className="w-6 h-6" />,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    percent: 80,
    icon: <Briefcase className="w-6 h-6" />,
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    percent: 75,
    icon: <Server className="w-6 h-6" />,
  },
  {
    name: "Express.js",
    category: "Backend",
    percent: 75,
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    name: "MongoDB",
    category: "Backend",
    percent: 70,
    icon: <Database className="w-6 h-6" />,
  },

  // ✅ Python Added Here
  {
    name: "Python",
    category: "Backend",
    percent: 65,
    icon: <Terminal className="w-6 h-6" />,
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "Tools",
    percent: 80,
    icon: <Command className="w-6 h-6" />,
  },
  {
    name: "VS Code",
    category: "Tools",
    percent: 85,
    icon: <Box className="w-6 h-6" />,
  },
  {
    name: "Figma",
    category: "Tools",
    percent: 70,
    icon: <Layers className="w-6 h-6" />,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Full Stack Product Store",
    description:
      "A complete full-stack inventory management system where users can add, update, and delete products. Includes a custom REST API built with Node.js and Express, real-time MongoDB integration, clean architecture, and a responsive React frontend.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    image: productStoreImg,
    demoLink: "https://product-store-w5dq.onrender.com",
    repoLink: "https://github.com/md-alihaider/product-store/tree/main",
  },

];

