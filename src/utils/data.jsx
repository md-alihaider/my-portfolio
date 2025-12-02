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
  roles: ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast"],
  title: "Full Stack Developer",
  bio: "I'm a passionate developer creating robust server solutions and scalable architectures for modern web applications.",
  about:
    "I am a Full Stack Developer with a passion for building beautiful and functional web applications. I have a strong background in both frontend and backend development, and I am always eager to learn new technologies.",
  email: "alihaiderbgp@gmail.com",
  location: "Bihar, India",
  socials: {
    github: "https://github.com/md-alihaider",
    linkedin: "https://www.linkedin.com/in/md-ali-haider/",
    instagram: "https://www.instagram.com/alihaider_7056/#",
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
  {
    name: "HTML",
    category: "Frontend",
    percent: 95,
    icon: <FileCode className="w-6 h-6" />,
  },
  {
    name: "CSS",
    category: "Frontend",
    percent: 95,
    icon: <Palette className="w-6 h-6" />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    percent: 90,
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    name: "React",
    category: "Frontend",
    percent: 90,
    icon: <Layout className="w-6 h-6" />,
  },
  {
    name: "Tailwind",
    category: "Frontend",
    percent: 90,
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    name: "Next.js",
    category: "Frontend",
    percent: 85,
    icon: <Globe className="w-6 h-6" />,
  },

  {
    name: "Node.js",
    category: "Backend",
    percent: 85,
    icon: <Server className="w-6 h-6" />,
  },
  {
    name: "Python",
    category: "Backend",
    percent: 80,
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    percent: 75,
    icon: <Database className="w-6 h-6" />,
  },
  {
    name: "Redis",
    category: "Backend",
    percent: 70,
    icon: <HardDrive className="w-6 h-6" />,
  },

  {
    name: "Docker",
    category: "Tools",
    percent: 75,
    icon: <Box className="w-6 h-6" />,
  },
  {
    name: "AWS",
    category: "Tools",
    percent: 70,
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    name: "Git",
    category: "Tools",
    percent: 90,
    icon: <Command className="w-6 h-6" />,
  },
  {
    name: "Figma",
    category: "Tools",
    percent: 85,
    icon: <Layers className="w-6 h-6" />,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Full Stack Product Store",
    description:
      "A complete inventory management system allowing users to create, update, and delete products with real-time MongoDB integration.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    image: productStoreImg,
    demoLink: "https://product-store-w5dq.onrender.com",
    repoLink: "https://github.com/md-alihaider/product-store/tree/main",
  },
  {
    id: 2,
    title: "Task Master AI",
    description: "AI-powered productivity app with drag-and-drop interface.",
    tags: ["TypeScript", "OpenAI", "Firebase"],
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Secure API Gateway",
    description: "High-performance API gateway with rate limiting.",
    tags: ["Go", "Redis", "Docker"],
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1558494949-ef2bb6db8744?auto=format&fit=crop&q=80&w=800",
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 4,
    title: "Social Analytics",
    description: "Social media engagement tracking platform.",
    tags: ["Vue.js", "Django", "PostgreSQL"],
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    demoLink: "#",
    repoLink: "#",
  },
];
