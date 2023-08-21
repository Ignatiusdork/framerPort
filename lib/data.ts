import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "AptLearn Certification",
    location: "Uyo, Nigeria",
    description:
      "Learned about the fundamentals of technical writing, Learnt from scratch the basic terminologies in technical writing.",
    icon: React.createElement(LuGraduationCap),
    date: "2023, July",
  },
  {
    title: "SINSO Product-Research Writer",
    location: "Uyo, Nigeria",
    description:
      "Wrote blockchain and Web3 research articles for SINSO's products, distilling complex concepts into engaging content.",
      icon: React.createElement(FaReact),
    date: "2022, July",
  },
  {
    title: "Web3 Development",
    location: "Houston, TX",
    description:
      "Contributed to the front-end development/desgin of a decentralized game site(dApps) on the Hedera Hashgraph, leveraging the hedera SDKs and tools to achieve an optimal performance of the applications.",
    icon: React.createElement(FaReact),
    date: "Mar - May 2023",
  },
  {
    title: "Discord Manager(H-BRAHS)",
    location: "Sydney, Australia ",
    description:
      "Monitoring and promptly responding to inquiries, feedback, and support requests from community members on the forums.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "LabourX Freelance",
    location: "Sydney, Australia ",
    description:
      "I am currently working as a freelancer for software development, writing, and also open to full-time roles and opportunities. My stack includes React, Next.js, JavaScript, Tailwind. I am also working to upskill to full stack. ",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - present",
  },

] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;