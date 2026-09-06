export interface Project {
  id: number;
  title: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Team Project";
  description: string;
  features: string[];
  tags: string[];
  image: string;
  github: string;
  live: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Full-stack e-commerce web app built with Next.js, Node.js, and MongoDB featuring payment integration.",
    features: [
      "User authentication and payment gateway setup",
      "Dynamic admin dashboard for inventory management"
    ],
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/ecommerce.png",
    github: "https://github.com/mahabubrabb-a11y/Ecommerce-web-site/tree/main/File/main_file",
    live: "https://ecommerce-web-site-two.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Frontend",
    description: "Personal terminal-themed portfolio built with Next.js and Tailwind CSS with custom dark mode styling.",
    features: [
      "Terminal-style interactive interface and state management",
      "Functional Nodemailer backend contact system"
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio-demo.com"
  },
  {
  id: 3,
  title: "Library Management System",
  category: "Full Stack",
  description: "A comprehensive digital library system to manage book inventories, user borrowing history, and automated fine tracking.",
  features: [
    "Book issuing, returning, and stock control dashboard",
    "User roles management for Admins and Student members"
  ],
  tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  image: "/projects/library.png",
  github: "https://github.com/mahabubrabb-a11y/Library-managment-system",
  live: "https://library-managment-system-umber.vercel.app/"
}
];