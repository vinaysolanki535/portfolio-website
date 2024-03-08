import React from "react";
import onehoodaiImg from "@/public/onehoodai.png";
import cocreatehubImg from "@/public/cocreatehub.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer at OROCORP",
    location: "Chennai, (Remote)",
    description:
      "working on 6 repositories, developing 3 platforms from scratch using Next.js React, TypeScript, Tailwind CSS, Formik, webpack integration, JEST for unit testing. Successfully implemented reusable, intricate custom components leveraging socket connections, resulting in a notable 70% daily increase in loan counts across platforms. Managing development, deployment, providing production support, and contributing to high-traffic platform enhancements, optimizing user experience and system stability.",
    icon: "/oro.jpeg",
    date: "MAY 2023 - present",
  },
  {
    title: "Software Developer at YOCKET",
    location: "Mumbai, (Remote)",
    description:
      "During my tenure at YOCKET as SDE, I played a pivotal role in overhauling a client servicing product, resulting in a staggering 120% surge in study abroad preparation users. My contributions extended to designing and developing hassle-free reusable modules for Events, driving traffic from potential events through SEO optimization for both Web and PWA platforms. Additionally, I've demonstrated adeptness in developing various RESTFUL APIs, services, and middlewares to streamline data management across platforms, while also integrating JEST API to significantly enhance unit testing coverage by 80%, thereby reducing QA regression testing time by 60%.",
    icon: "/yocket.jpeg",
    date: "NOV 2021 - MAY 2023",
  },
  {
    title: "Frontend Developer at NatureDots",
    location: "Delhi, (Remote, Intern)",
    description:
      "👨‍💻 As a dedicated Front-end Developer, I played a pivotal role in crafting and evolving a robust web/mobile app dashboard for NatureDots using cutting-edge technologies. Leveraging React.js, Redux, and Tailwind CSS, I meticulously built the entire front-end from scratch, delivering an immersive user experience for our 2000+ active users. 🗺️ Introducing Mapbox API, Terracotta Map server, and chart.js into our arsenal, I engineered a dynamic visualization of GeoJson data, resulting in a remarkable 40% surge in user engagement. Witnessing the impact of my work firsthand has been truly rewarding.",
    icon: "/naturedots.jpeg",
    date: "JUL 2021 - NOV 2021",
  },
  {
    title: "Frontend Developer at TSDS",
    location: "Delhi, (Remote, Intern)",
    description:
      "Key Achievements: Engineered a sleek React.js app for seamless data collection, Propelled E-Commerce growth with predictive insights for intelligent inventory management, Transcended UX norms using PWA principles and enhanced styling with Tailwind CSS. 🚀 Tech stack: Excelled in React.js, PWA, Tailwind CSS, HTML5, CSS3, MongoDB, Firebase.",
    icon: "/tsds.jpeg",
    date: "JUN 2021 - JUL 2021",
  },
] as const;

export const projectsData = [
  {
    title: "OneHoodAI",
    description:
      "A single platform packed with handy AI tools that you can use in your daily life. From generating AI characters to images, videos, music, and even code. Talk with you favorite characters.",
    tags: [
      "Next.js",
      "React",
      "Typescript",
      "javascript",
      "Prisma",
      "Tailwind",
      "openAI",
      "ReplicatAI",
      "supabase",
    ],
    imageUrl: onehoodaiImg,
    projectURL: "https://onehoodai.vercel.app/",
    githubURL: "https://github.com/vinaysolanki535/oneHoodAI",
  },
  {
    title: "CoCreateHub",
    description:
      "A Next.js app revolutionizing collaboration with real-time sync, and liveblocks integration. Utilizing Canvas and Fabric.js, it empowers teams with seamless real-time drawing and design.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Fabric.js",
      "Canvas",
      "Liveblocks",
    ],
    imageUrl: cocreatehubImg,
    projectURL: "https://co-create-hub-beryl.vercel.app/",
    githubURL: "https://github.com/vinaysolanki535/Co-Create-Hub",
  },
] as const;

export const skillsData = [
  "Next.js",
  "React.js",
  "Vue.js",
  "Redux",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Tailwind",
  "Git",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Jest",
  "React Testing Library",
  "AWS",
] as const;
